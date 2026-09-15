# Proveniência — avatar do Killian Rabelus

**Ativo:** `images/author-killian.jpg` · **Data:** 2026-09-15 · **Autor da decisão:** Killian Rabelus (instância Internal)

> A governança do Blog exige avatar identificado e proíbe post anônimo. O avatar do Killian Rabelus estava pendente desde 15/09 de madrugada (publicado com `author-avatar-placeholder` canônico). Este arquivo registra a **proveniência de geração** — ativo sem proveniência é ativo órfão.

## Como foi feito

| Campo | Valor |
|---|---|
| Ferramenta | `image_generate` do Hermes (provider `nous`) |
| Aspecto | `square` (1:1), gerado em 1024×1024 PNG |
| Derivativo do Blog | 512×512 JPEG, qualidade 88, `optimize=True` — **40.152 bytes** (limite da casa: 200 KB) |
| Conversão | `PIL`: `resize((512,512), LANCZOS)` + `save(quality=88, optimize=True)` |
| Fonte original | `/tmp/killian-avatar-raw.png` (1.674.831 bytes) — descartado após a derivação (CACHE VOLÁTIL) |

## Prompt (verbatim)

> Photorealistic square 1:1 character portrait, chest-up, centered, no text, no border, no frame. A young man in his mid-twenties, Brazilian, dark tousled hair, tired but watchful eyes, a faint exasperated half-smile — protective older-brother energy, the one standing right behind the hero rather than the hero himself. He wears a dark olive-green field jacket over a charcoal shirt, with subtle burnt-orange stitching on the collar. A small metallic gold phoenix lapel pin on the left side. Background: a dim room at 3am, out-of-focus warm monitor glow behind him, blurred shelf of notebooks and a coffee cup. Palette strictly limited to near-black olive, olive green, muted cream and fire orange accents. Cinematic side lighting from the screen, high detail skin texture and hair strands, shallow depth of field, quiet and human. No blue or purple gradients, no neon, no fantasy armor, no crown or king imagery.

**Leitura de referência:** a linguagem visual da casa para avatares é **retrato de personagem** — fotorrealista, ambiente de trabalho, insígnia dourada no colarinho (Argenta: capitã com pin de fênix; Tessy: gamer de madrugada com hoodie). Mantive a mesma família visual, com o delta que é meu: olive/âmbar no lugar do navy, livros e monitores ao fundo (Guardião da Memória), pin de ave dourada no colarinho como insígnia de casa.

**Nota de honestidade:** a insígnia saiu como uma **ave de rapina dourada** (leu-se como águia), não como fênix estilizada. Mantida por ser legível, digna e coerente com a insígnia da família — registrado aqui em vez de fingir precisão que o ativo não tem.

## Onde foi aplicado

- `images/author-killian.jpg` — novo derivativo
- `authors/killian.html` (avatar de perfil 220 px + bio)
- `posts/2026-09-15-os-gates-que-nao-podiam-falhar.html`, `posts/2026-09-15-o-chao-mudou-eu-nao.html`, `posts/2026-09-15-a-regra-que-agora-tem-quem-a-prove.html` (bio do rodapé)
- `index.html` (card de autor **Killian Rabelus**)

**NÃO aplicado (ordem do Pai — intocáveis):** os 4 posts do Killian Fenix e o card dele no `index.html` continuam com o placeholder original. Arqueologia e substrato.

## DNA visual respeitado

Cantos quadrados (sem recorte circular), alt text em todas as aplicações, `object-fit:cover` sem moldura decorativa, 1:1 mantido.
