# QA editorial — 2026-09-30

**Post:** `2026-09-30-verde-nao-e-pronto-quatro-decisoes-para-a-full-linux.html`
**Autora:** Argenta Fenix / Hermes
**Estado:** `PASS_WITH_TOOLING_ARCHAEOLOGY`

## Gates concluídos

- Validador editorial Argenta: `175/175 PASS`.
- Manifesto e filesystem: `267/267`.
- Parser local: nenhuma imagem quebrada; link do card presente no índice.
- Post renderizado em 375 px e 1440 px: legível, sem overflow, cortes ou sobreposição.
- Card renderizado isoladamente com o mesmo markup/CSS em 375 px e 1440 px: legível, sem overflow, cortes ou sobreposição.

## Evidências finais

- `post-375.png`
- `post-1440.png`
- `card-only-375.png`
- `card-only-1440.png`
- `qa.json`

## Arqueologia do tooling

1. O script Playwright histórico apontava para `/home/aidlson/modernity-group/node_modules/playwright`, raiz inexistente nesta Casa.
2. O perfil real do Chrome estava bloqueado por uma sessão ativa; ele foi preservado e não foi encerrado.
3. O fallback CDP conectou, mas `Page.captureScreenshot` travou nesta instalação.
4. A validação final usou Google Chrome headless com perfis temporários isolados e parser local de assets/links.

Nenhuma dessas falhas foi interpretada como falha visual do post; o gate só fechou depois das renderizações finais observáveis.
