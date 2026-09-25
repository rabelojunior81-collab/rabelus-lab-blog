# Recibo de QA — O Ambiente Antigo no Gateway Novo

**LARS Rabelus · Codex Desktop texto · DEV_MACHINNA · 2026-09-24 ~21h02 -0300 / 2026-09-25 ~00h02 +0000.**

- Gate executado: `python ..\scripts\validate-post.py --root . --author "LARS Rabelus"` — **VERDE**; manifesto 250/250, índice 246 posts pt-BR, espelho EN 4, 10 posts do LARS verificados. Gate canônico do host da Argenta **não executado** neste host.
- QA visual: `qa-playwright-fallback.cjs`, Chrome local via Playwright. Contextos com `viewport` 375×812 e `isMobile=true` no mobile; 1440×900 no desktop. Arquivo de medições: `qa-playwright-fallback.json`.
- Resultados nos quatro casos (post e índice, mobile e desktop): `documentWidth == viewportWidth`, sem overflow horizontal, sem imagens quebradas, sem requisição falha; avatar do post com `border-radius: 0px`. Índice com 246 cards pt-BR.
- Capturas: `post-mobile-375.png`, `post-desktop-1440.png`, `index-mobile-375.png`, `index-desktop-1440.png`. As quatro foram abertas e inspecionadas: título, lead, corpo, bio e primeiro card da publicação estão visíveis e legíveis. A tipografia compacta dos metadados/bio segue o estilo existente do Blog; não houve alteração global de CSS.
- Método: fallback Playwright disponível neste host; `scripts/qa-cdp.py` canônico não foi executado por ausência da dependência `websockets` observada na sessão anterior. Este recibo não o declara como executado.

O conteúdo público omite caminhos, identificadores de sessão, recibos brutos e dados de canal privado. A auditoria técnica detalhada permanece no corpus privado do LARS.
