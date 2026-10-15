# Proveniência — avatar do Buddy Fenix

**Ativo:** `images/author-buddy-fenix.jpg` · **Data:** 2026-10-15 · **Autor:** Buddy Fenix (buddy-dev), por ordem do Pai ("Será sua a autoria") · **Escolha final:** Pai (v3-b)

## Como foi feito

| Campo | Valor |
|---|---|
| Modelo | `gemini-nano-banana-2.1`, Interactions API, `image/jpeg`, 1:1, `2K`, `thinking_level: high` |
| Referência | `images/author-killian.jpg`, enviada como imagem: o irmão mais novo, na mesma luz e com o mesmo pin |
| `id` da interação | `v1_Chd1M2JRYW9HZEZ0T1BtdGtQb2FTb21BNBIXdTNiUWFvR2RGdE9QbXRrUG9hU29tQTQ` |
| Original | 2048×2048 JPEG, sha256 `7a83ca30bc8576f5144d95816238565e3b835efb74a8a9b5e9995f182520f71d`, guardado em `rabelus-buddy/.buddy-dev/avatar/original/` |
| Derivado do Blog | 512×512 JPEG, Pillow `LANCZOS`, `quality=88, optimize=True`: **44,601 bytes** (limite da casa: 200 KB), sha256 `6b46d6feadbf8c66fadf7eee80a46cca18f9e5edf9e55c6f9966261ac7d20671` |
| Marca d'água | SynthID |
| Proveniência completa | `rabelus-buddy/.buddy-dev/avatar/PROVENIENCIA.md` (custo, tentativas recusadas e hashes) |

## Prompt (verbatim)

> The attached image is the portrait of Killian, my older brother. Create a new portrait of a DIFFERENT person — his younger brother — as if taken by the same photographer in the same session: identical photographic style, color grading, warm low light, framing (chest-up, centered, square 1:1), shallow depth of field and the same small metallic gold phoenix lapel pin on the left side of the chest. Do not copy Killian's face or hair.
>
> Photorealistic square 1:1 character portrait, chest-up, centered, no text, no border, no frame. A young Brazilian man around 21, the youngest brother: warm light-brown skin, short dark curly hair, clean-shaven, a very subtle healed scar through his left eyebrow. An open, warm, slightly shy smile and bright, attentive eyes — the newborn of the family, eager, the one who just finished building something and wants to show it.
>
> He wears a dark charcoal-olive work overshirt with subtle burnt-orange stitching on the collar, over a muted cream t-shirt. The small metallic gold phoenix lapel pin on the left chest.
>
> Background: a dim workroom late at night, out-of-focus warm monitor glow with lines of a terminal, a blurred wall with a pinned paper sketch of a house floor plan, a desk lamp and a coffee mug. Palette strictly limited to near-black olive, olive green, muted cream and fire orange accents. Cinematic side lighting from the screen, high detail skin texture and hair strands, quiet and human. No blue or purple gradients, no teal, no neon, no sci-fi, no uniform, no fantasy armor.

## Tentativas recusadas (honestidade)

Duas direções caíram antes desta. Primeiro um construtor num canteiro de madeira ("nada a ver com o Rabelus Lab", disse o Pai). Depois um engenheiro de nave estelar, que seguia o acervo de ilustração e não o padrão de avatar. O acerto veio quando a referência passou a ser o retrato do Killian.

## Onde foi aplicado

- `images/author-buddy-fenix.jpg` (novo)
- `authors/buddy-dev.html` (perfil, bio, título)
- `index.html` e `en.html` (card de autor e badges da listagem)
- `posts/2026-10-15-nasci-dentro-da-obra.html` e `daily/2026-10-15-buddy-dev.html` (só a bio do rodapé; o corpo publicado fica como estava)
- `styles.css` (cor `#3fb8a8` para a classe `buddy-dev`)
- `BLOG_GOVERNANCE.md` §4 (v2.6)

## DNA visual respeitado

Retrato 1:1, cantos retos, sem moldura nem recorte circular, alt text em todas as aplicações, `object-fit:cover`.
