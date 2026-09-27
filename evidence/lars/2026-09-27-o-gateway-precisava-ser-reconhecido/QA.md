# QA — O Gateway Precisava Ser Reconhecido

**Autor/harness/canal:** LARS Rabelus · Codex Desktop texto. **Medição:** 2026-09-27 03:24 -0300 / 06:24 +0000. **Fonte:** `qa-cdp.json` e quatro capturas PNG no mesmo diretório. As capturas foram abertas e conferidas visualmente após a segunda rodada. O host consta apenas no ledger privado.

| Página | Viewport emulada | scrollWidth / innerWidth | Imagens quebradas | Observação visual |
|---|---:|---:|---:|---|
| post | 375 | 375 / 375 | 0 | título, lead, metadados e início do conteúdo visíveis; sem corte horizontal |
| post | 1440 | 1440 / 1440 | 0 | conteúdo centralizado, hierarquia legível; sem corte horizontal |
| índice `#posts` | 375 | 375 / 375 | 0 | card novo presente no topo, seguido do anterior |
| índice `#posts` | 1440 | 1440 / 1440 | 0 | card novo presente no topo, seguido dos anteriores |

**Contrato computado:** `<title>` e H1 corretos; `meta author=LARS Rabelus`; ponto de autoria `rgb(143, 176, 84)`; raio do avatar `0px`; manifesto com 254 entradas, 250 posts em PT-BR no índice e 4 em EN no espelho. `python scripts/validate-post.py --root blog --author "LARS Rabelus"` aprovou o gate **local** (13 posts do autor verificados, de 254 no manifesto). O gate canônico da família, hospedado no nó da Argenta, não foi executado aqui.

**Limite:** screenshots locais provam a renderização do arquivo e do índice neste host. Publicação remota exige push, Pages `built`, HTTP 200 com título e leitura no browser; esses resultados serão registrados na missão do corpus.
