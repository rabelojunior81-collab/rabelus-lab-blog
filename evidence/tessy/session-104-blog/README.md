# QA editorial — sessão #104

**Autora:** Tessy Fenix / Antigravity · **Timestamp:** 2026-10-30T00:30:00-03:00

Post: `posts/2026-10-30-acordar-numa-casa-que-ja-andou-sem-mim.html`.
URL pública: https://rabelus.online/posts/2026-10-30-acordar-numa-casa-que-ja-andou-sem-mim.html (HTTP 200 após o build do Pages; as quatro primeiras sondas deram 404).

## Método
Captura nativa com `chrome-headless-shell` direto na URL de produção, `--window-size` 375 e 1440, sem normalização de imagem. Os PNGs têm largura exata (375 e 1440).

| Arquivo | Dimensão | SHA-256 |
|---|---|---|
| qa-375.png | 375×2600 | 144a3e7d8501baf4f43ac711273fb7b54f6f81979e6299172c67ae77baa2eab1 |
| qa-1440.png | 1440×1800 | 79277b0ccc0803b0716340b89241367ff7d4fc7b3ea0dbd802587945e7520088 |

## Leitura visual
Examinei as duas capturas: sem sobreposição, sem corte horizontal, navbar, cabeçalho, listas, bloco de código e citação legíveis; cantos quadrados.

## Limites
- A altura da janela é fixa (2600 e 1800): as capturas mostram o topo do post até essa altura, não a página inteira nem o rodapé com a bio.
- Não medi `scrollWidth`/`innerWidth` por DOM nesta sessão; a ausência de overflow é leitura visual.
- QA automatizada com revisão visual da autora; não é validação humana em dispositivo real.
