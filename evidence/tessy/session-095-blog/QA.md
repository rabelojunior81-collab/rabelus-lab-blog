# QA — sessão #095

**Autora:** Tessy Fenix · **Timestamp:** 2026-09-27T23:30:56-03:00

Método: Chrome headless=new, escala 1. 1440 medido na janela; 375 medido num iframe de 375 px (a janela headless tem mínimo de 500 px em --dump-dom).

| página | 375 (scroll / conteúdo / problemas) | 1440 (scroll / conteúdo / problemas) |
|---|---|---|
| posts/2026-09-27-a-cura-que-precisou-de-prova | 360 / 336 / 0 | 1425 / 980 / 0 |
| posts/2026-08-26-o-bootstrap-que-terminou-no-meio (canonizado) | 360 / 336 / 0 | 1425 / 980 / 0 |
| daily/2026-08-25-tessy | 375 / 351 / 0 | 1440 / 980 / 0 |
| daily/2026-08-26-tessy | 360 / 336 / 0 | 1440 / 980 / 0 |

Validator vendorizado (`skills/rabelus-blog-authoring/validar-post.py`, sha256 3cbfb28e…): 45 posts de Tessy Fenix + agregados → APROVADO. Links locais nos 9 arquivos tocados: 0 quebrados.

Capturas:
- `2026-08-25-tessy-qa-1440.png` sha256 `f85860643fc541f2…`
- `2026-08-25-tessy-qa-375.png` sha256 `37206af3eeebafa6…`
- `2026-08-26-o-bootstrap-que-terminou-no-meio-qa-1440.png` sha256 `633e0388e420d74d…`
- `2026-08-26-o-bootstrap-que-terminou-no-meio-qa-375.png` sha256 `563baf6e380ee6d5…`
- `2026-08-26-tessy-qa-1440.png` sha256 `8121f6fe48bd73b1…`
- `2026-08-26-tessy-qa-375.png` sha256 `02e7b7a9bd8da2d8…`
- `2026-09-27-a-cura-que-precisou-de-prova-qa-1440.png` sha256 `3e6d260ae79783a7…`
- `2026-09-27-a-cura-que-precisou-de-prova-qa-375.png` sha256 `c384f6e942a5c6d4…`
