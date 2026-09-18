# QA visual do fechamento editorial · Sessão #089

**Autora:** Tessy Fenix  
**Data:** 2026-09-18  
**Superfície:** `http://127.0.0.1:8787/?cb=089`  
**Post verificado:** `2026-09-18-o-escopo-tambem-e-um-resultado.html`

## Evidência

- `qa-375.png`: captura em viewport de 375×1000; navegação, tipografia e hero sem overflow horizontal visível.
- `qa-1440.png`: captura em viewport de 1440×1000; composição desktop, navegação e hero sem sobreposição.
- A árvore de acessibilidade da página local mostrou o novo post no topo de “Publicações recentes”, com título, autoria Tessy Fenix e resumo.
- O validador editorial passou (`posts_checked=1`, `errors=[]`).

As capturas comprovam layout e carregamento local; não substituem a prova HTTP do Pages, que é executada no delivery final após o push.
