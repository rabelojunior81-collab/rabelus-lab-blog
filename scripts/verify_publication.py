"""Read-only local domain guard and HTTPS/byte verification, for every author.

The checkout's CNAME is the operational source. Historical evidence is not rewritten.
Run on the exact published checkout when using --public.
"""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, quote
from urllib.request import Request, urlopen
from hashlib import sha256
import argparse
import json
import re

ROOT = Path(__file__).resolve().parents[1]
RETIRED = {"rabelus.online", "www.rabelus.online"}


def domain(root):
    value = (root / "CNAME").read_text(encoding="utf-8").strip().lower()
    if not re.fullmatch(r"(?=.{1,253}$)(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,63}", value):
        raise ValueError("CNAME must contain exactly one DNS hostname")
    if value in RETIRED:
        raise ValueError("CNAME points to the retired domain")
    return value


class ActiveLinks(HTMLParser):
    def __init__(self):
        super().__init__()
        self.bad = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        urls = [attrs.get(key, "") for key in ("href", "src", "action")]
        if tag == "meta" and attrs.get("property", attrs.get("name", "")).lower() in {"og:url", "twitter:url"}:
            urls.append(attrs.get("content", ""))
        for url in urls:
            if urlsplit(url).hostname in RETIRED:
                self.bad.append(url)


def local_checks(root):
    errors = []
    try:
        host = domain(root)
    except (ValueError, OSError) as exc:
        return {"status": "FAIL", "errors": [str(exc)]}
    # Public HTML only; evidence retains its original addresses and hashes.
    files = list(root.glob("*.html"))
    for folder in ("posts", "daily", "authors", "wiki", "templates"):
        files.extend((root / folder).rglob("*.html"))
    for path in files:
        parser = ActiveLinks()
        try:
            parser.feed(path.read_text(encoding="utf-8"))
            errors.extend(f"{path.relative_to(root)}: retired URL {url}" for url in parser.bad)
        except (ValueError, OSError) as exc:
            errors.append(f"{path.relative_to(root)}: {exc}")
    return {"status": "FAIL" if errors else "PASS", "domain": host,
            "base_url": "https://" + host, "html_checked": len(files), "errors": errors}


def verify(root, host, relative):
    path = (root / relative).resolve()
    if not relative or not path.is_relative_to(root.resolve()) or not path.is_file():
        raise ValueError("Expected a local file inside the Blog: " + relative)
    rel = path.relative_to(root.resolve()).as_posix()
    url = "https://" + host + "/" + quote(rel)
    # Reject cross-origin and HTTP redirects before following them.
    from urllib.request import HTTPRedirectHandler, build_opener
    class SameOrigin(HTTPRedirectHandler):
        def redirect_request(self, req, fp, code, msg, headers, newurl):
            if urlsplit(newurl).scheme != "https" or urlsplit(newurl).netloc != host:
                raise ValueError("Unexpected redirect: " + newurl)
            return super().redirect_request(req, fp, code, msg, headers, newurl)
    opener = build_opener(SameOrigin())
    with opener.open(Request(url, headers={"Cache-Control": "no-cache", "User-Agent": "Rabelus-Publication-QA/2.0"}), timeout=30) as response:
        data, status, final = response.read(), response.status, response.url
    expected = path.read_bytes()
    return {"path": rel, "url": url, "final_url": final, "status": status,
            "public_sha256": sha256(data).hexdigest(), "local_sha256": sha256(expected).hexdigest(),
            "equal": data == expected, "ok": status == 200 and data == expected}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--root", type=Path, default=ROOT)
    parser.add_argument("--public", action="store_true")
    parser.add_argument("--file", action="append", default=[])
    args = parser.parse_args()
    root = args.root.resolve()
    result = local_checks(root)
    if args.public and result["status"] == "PASS":
        if not args.file:
            result["errors"].append("--public requires at least one --file; zero coverage is not PASS")
        result["results"] = []
        for path in args.file:
            try:
                receipt = verify(root, result["domain"], path)
                result["results"].append(receipt)
                if not receipt["ok"]:
                    result["errors"].append(path + ": HTTP/content mismatch")
            except Exception as exc:
                result["errors"].append(path + ": " + str(exc))
        result["status"] = "FAIL" if result["errors"] else "PASS"
    print(json.dumps(result, ensure_ascii=False, indent=2))
    return result["status"] != "PASS"


if __name__ == "__main__":
    raise SystemExit(main())
