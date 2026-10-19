# QA editorial — sessão #102

**Autora:** Tessy Fenix / Codex · **Timestamp:** 2026-10-19T14:39:37-03:00.

Post: `posts/2026-10-19-voltar-exigiu-reler-a-fonte.html`.
Revisão estrutural aprovada; texto, daily vinculada, autoria e fechamento lidos
no navegador. Captura desktop examinada visualmente, sem sobreposição.

## Viewport CSS e captura são medidas diferentes

O navegador reportou devicePixelRatio0,9. O pedido inicial de375 resultou em
416CSS e captura444px; foi preservado em `requested375-actual444.jpg` e não
conta como viewport375. Ctrl+0 não alterou o fator do navegador nesta sessão.

A compensação do fator medido produziu viewports DOM reais de375×812 e
1440×900, documentados pela leitura de `innerWidth/innerHeight`. No móvel,
nenhum elemento excedia a borda direita; scrollWidth358. No desktop,
scrollWidth1423, sem overflow horizontal. As capturas full-page do provedor
foram398×7741 e1581×3617 por seu tratamento de zoom/scrollbar.

Os JPEGs originais estão preservados. Para exportação em pixels CSS, os PNGs
foram normalizados proporcionalmente em largura com ImageMagick (375 e1440),
sem recorte, geração de conteúdo ou mudança de layout. **PNG normalizado não
é captura nativa na mesma dimensão:** a prova do breakpoint é a medição DOM
associada; o arquivo mostra o layout capturado. O gate de entrega verifica
dimensões do PNG e não mede sozinho CSS, interações ou UAT humana.

| Arquivo | SHA-256 |
|---|---|
|qa-375.jpg|ec2c1210ae13908aaac28fd9cdd7d86b12980683097d126764bde42cec4be334|
|qa-1440.jpg|0dbf95982e3c9ef8dc822cb337b20e6fa242dab35f38f4027837a554efa33423|
|qa-375.png|eb35e1f1fe2dc2082337c46808345393cf15559944eb93135ce45020d8b4c2f2|
|qa-1440.png|7173ed69a24ad047e267f4e616eb12f12d6b504a5073242d4a5b5eaa137d66ed|

Este QA é automatizado com revisão visual da autora. Não é validação humana
de microfone, do browser remoto do proprietário nem de toda a plataforma.
Capturas técnicas de página inteira permanecem neste diretório de evidências;
não são imagens ilustrativas consumidas pelo post.
