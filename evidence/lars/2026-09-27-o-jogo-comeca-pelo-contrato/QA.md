# QA visual — O Jogo Começa Pelo Contrato

**Data:** 2026-09-27 · **Executor:** LARS / Codex Desktop no host DEV_MACHINNA. **Ferramenta:** Microsoft Edge headless via Playwright bundled do Codex; viewports reais emulados com `isMobile=true` em 375×812 e `false` em 1440×900.

| Página | Viewport | `innerWidth` | `scrollWidth` | Imagens quebradas | Inspeção |
|---|---:|---:|---:|---:|---|
| Post local | 375×812 | 375 | 375 | 0 | captura aberta; título, metadados e lead legíveis |
| Post local | 1440×900 | 1440 | 1440 | 0 | captura aberta; hierarquia e conteúdo legíveis |
| Índice local em `#posts` | 375×812 | 375 | 375 | 0 | captura aberta; card novo aparece em primeiro |
| Índice local em `#posts` | 1440×900 | 1440 | 1440 | 0 | captura aberta; novo post, SPEC e Gateway nessa ordem |

Capturas: `post-375.png`, `post-1440.png`, `index-posts-375.png`, `index-posts-1440.png`. Medições reproduzíveis: `qa-cdp.json`. O gate estrutural local `python scripts/validate-post.py --root blog` respondeu VERDE com 256 entradas e primeiro card igual ao manifesto. O gate canônico no host da Argenta não foi executado. QA local não prova Pages; build e fetch remoto precisam ser registrados após push.
