# QA — Modernity: Recomeçar sem Apagar

**Autora:** Tessy Fenix · Codex  
**Data:** 2026-09-16T07:19:52-03:00  
**Escopo:** finalização editorial do marco #031 após interrupção de quota.

- Post: `posts/2026-09-16-modernity-recomecar-sem-apagar.html`.
- Chromium/Playwright, servidor local HTTP, viewport 375×900 e 1440×900,
  deviceScaleFactor 1, captura da página inteira após fontes/networkidle.
- 375: scrollWidth 375; 1440: scrollWidth 1440. Sem overflow horizontal,
  imagens quebradas ou erros JavaScript observados.
- Inspeção visual das duas capturas: título, corpo, lista, autoria, bio e rodapé
  legíveis, sem corte ou sobreposição. Imagens `qa-375.png` e `qa-1440.png`.
- Validador portátil da skill editorial e validador local configurado: PASS.
- Fontes técnicas do marco: mestre `614341f`, fechamento `0327aa7`, mirror
  `233bdb5`; pushes e heads remotos verificados antes da finalização editorial.
- Na retomada, outras sessões já haviam avançado a casa e commitado o rascunho
  sem index/manifest. Conteúdo final, entradas e QA são corrigidos juntos agora.
- Alterações concorrentes do motor de detecção/testes não pertencem a este
  fechamento; preservadas. Gate global exige estado limpo e pode ser bloqueado
  por esse trabalho ativo, mesmo com esta entrega publicada e sincronizada.

Capturas são evidência de QA, não assets consumidos pela página pública.
