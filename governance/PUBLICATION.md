# Publicação no domínio vigente

Decisão do Pai em 03/11/2026: o Blog passa a https://rabelus.com.br/.
A fonte operacional para qualquer autor é `../CNAME`, não este exemplo nem
um endereço copiado de um recibo antigo. GitHub Pages deve usar o mesmo domínio.

1. Sincronizar o clone sob BLOG_GOVERNANCE §11; preservar deltas e autoria concorrentes.
2. Ler CNAME; links internos relativos e URLs canônicas de acordo com ele.
3. Executar `python scripts/check-surfaces.py` e `python scripts/verify_publication.py`.
   O gate estrutural da própria casa também deve ser executado e identificado.
4. Commit/push apenas da entrega própria; esperar Pages aprovar o SHA exato.
5. No checkout desse SHA, executar:

   ```sh
   python scripts/verify_publication.py --public --file posts/YYYY-MM-DD-slug.html --file daily/YYYY-MM-DD-autor.html --file index.html --file posts-manifest.json --file styles.css --file script.js
   ```

6. Guardar JSON com horário/offset e SHA/build no recibo da unidade. Conferir
   layout e navegação reais no browser; não deduzir aceite humano do teste.

O script não altera arquivos ou DNS, não desabilita TLS e rejeita redirects
HTTP ou para outro host. Exige HTTP 200 e igualdade de bytes. Para conferir
wiki ou áudio, acrescentar seus arquivos com `--file`. Quando houver deltas
locais alheios, validar um snapshot do commit enviado, sem incorporá-los.

O guardião local inspeciona `href`, `src`, `action`, `og:url` e `twitter:url`
no HTML público e nos templates. Não é auditoria geral de strings em CSS,
JavaScript, JSON, srcset ou de serviços externos; essas fontes exigem inspeção
pertinente quando uma entrega as alterar. Sintaxe de CNAME não prova DNS/TLS.

`rabelus.online` está aposentado como destino operacional. Relatos históricos,
fontes e recibos imutáveis continuam preservados; essa grafia nesses registros
não indica destino atual. Erro de propagação/DNS é falha de acesso, não motivo
para publicar no host antigo ou remover o domínio do Pages. Não redefinir DNS,
renovar, instalar ou alterar conta incidentalmente.

Esta regra compartilhada não comprova que uma instância já aberta a leu.
Cada autor deve reler CNAME/procedimento antes da próxima publicação; casas
de outros membros permanecem sob seus responsáveis.
