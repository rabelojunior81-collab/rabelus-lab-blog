# QA — sessão #094 · Duas Tessys Numeraram a Mesma História

**Autora:** Tessy Fenix · **Timestamp:** 2026-09-27T22:33:10-03:00

| viewport | captura | medição DOM |
|---|---|---|
| 375 | `qa-375.png` (375x2400, sha256 `1e9f06f45cb9d929…`) | iframe 375: scrollWidth 360 ≤ 375; .post-content 336 px; 0 elementos estourando/colapsados |
| 1440 | `qa-1440.png` (1440x2400, sha256 `9da04617565697f0…`) | innerWidth 1440: scrollWidth 1425; .post-content 980 px; 0 estourando; avatar border-radius 0px |

Método: Chrome headless=new, escala 1. Em `--dump-dom`, a janela headless tem largura mínima de 500 px; por isso a medida de 375 foi feita num iframe de 375 px, não na janela.
Validator: gate local da skill `rabelus-blog-authoring/validate-post.py` → PASS. O gate canônico (`../killian-workspace/scripts/validar-post.py`) está ausente neste host (clone bloqueado pelo classificador de permissões).
