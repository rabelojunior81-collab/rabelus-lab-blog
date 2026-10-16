"""Read-only consistency of living editorial surfaces; no runtime-health claims.

Uses the current governance author table and manifest, not a fixed headcount.
Does not rewrite files or certify the historical meaning of an article.
"""
from pathlib import Path
import json,re,sys
ROOT=Path(__file__).resolve().parents[1]
def check(root):
 errors=[]
 def require(ok,message):
  if not ok:errors.append(message)
 m=json.loads((root/'posts-manifest.json').read_text(encoding='utf-8'))
 posts=m['posts'];require(bool(posts),'empty manifest')
 require(m['total_posts']==len(posts),'manifest total differs from entries')
 require(len({p['slug'] for p in posts})==len(posts),'duplicate manifest slug')
 require({p['file'] for p in posts}=={p.relative_to(root).as_posix() for p in (root/'posts').glob('*.html')},'manifest and post files differ')
 gov=(root/'BLOG_GOVERNANCE.md').read_text(encoding='utf-8')
 table=gov.split('### Autores permitidos',1)[1].split('### Regra crítica',1)[0]
 canonical=lambda n:'Buddy Fenix' if n in ('buddy-dev','Buddy Fenix (buddy-dev)') else n
 expected={canonical(line.split('|')[1].strip()) for line in table.splitlines() if line.startswith('|') and '`' in line}
 require(bool(expected),'no governance authors selected')
 require({canonical(p['author']) for p in posts}<=expected,'manifest author absent from governance')
 for file in ('index.html','en.html'):
  s=(root/file).read_text(encoding='utf-8')
  cards=re.findall(r'<article class="author-card glass-card">.*?</article>',s,re.S)
  names=[re.search(r'<h3>(.*?)</h3>',c)[1] for c in cards]
  require(set(names)==expected and len(names)==len(expected),file+': author cards differ from governance')
  require(all(re.search(r'href="\./(?:authors/|familia.html#)',c) for c in cards),file+': author card lacks history/profile link')
  for dest in re.findall(r'href="(\./(?:authors/[^"#]+|familia.html))(?:#[^"]*)?"',s):
   require((root/dest).exists(),file+': missing author/family page '+dest)
  # Inspect living introduction only; historical uses of three remain valid.
  intro=s.split('<section class="hero">',1)[1].split('id="posts"',1)[0]
  require(not re.search(r'(?i)três agentes|three agents|3 active agents|3 agentes|agentes ativas|active agents',intro),file+': stale fixed-count/active claim')
  require('href="./familia.html"' in intro,file+': family map not discoverable in introduction')
  links=re.findall(r'href="\./posts/([^"]+)"',s)
  require(len(links)==len(set(links)),file+': duplicate post cards')
  require({str('posts/'+x) for x in links}<={p['file'] for p in posts},file+': unlisted post link')
  if file=='index.html':
   require(set(links)=={Path(p['file']).name for p in posts if not p['lang'].startswith('en')},'PT archive does not cover every PT article')
  else:
   require('not a complete translation' in s,'EN selection/translation scope missing')
 return {'status':'FAIL' if errors else 'PASS','posts':len(posts),'governance_authors':sorted(expected),'errors':errors,'scope':'Living surface consistency. Full historical interpretation and responsive/publication checks remain separate.'}
if __name__=='__main__':
 try:result=check(ROOT)
 except (ValueError,KeyError,IndexError,OSError,AttributeError) as e:
  result={'status':'FAIL','errors':[type(e).__name__+': '+str(e)]}
 print(json.dumps(result,ensure_ascii=False,indent=2));sys.exit(result['status']!='PASS')
