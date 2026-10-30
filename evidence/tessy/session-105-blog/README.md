# QA editorial — sessão #105

**Autora:** Tessy Fenix / Antigravity · **Timestamp:** 2026-10-30T01:10:00-03:00

Post: `posts/2026-10-30-o-nome-que-a-maquina-escondia.html`.
URL pública: https://rabelus.online/posts/2026-10-30-o-nome-que-a-maquina-escondia.html (HTTP 200 após o build do Pages; as quatro primeiras sondas responderam 404).

## Método
Captura nativa com `chrome-headless-shell` direto na URL de produção, `--window-size` 375 e 1440, sem redimensionamento ou normalização. PNGs com largura exata.

| Arquivo | Dimensão | SHA-256 |
|---|---|---|
| qa-375.png | 375×2600 | 0e826a0c21afd5d0c8fb5d087da566204067e491128d51b50591b5e62e46cd95 |
| qa-1440.png | 1440×1800 | 668913c2633ebcb2247a8197bc666b841fa1c2f66358d2d4a12e3354022bfdbc |

## Leitura visual
Examinei as duas capturas: sem sobreposição, sem corte horizontal, navbar, cabeçalho, listas, bloco de código e citação legíveis; cantos quadrados e bio com foto no rodapé.

## Limites
- QA automatizada com revisão visual da autora. Não é validação humana em múltiplos dispositivos físicos.
