# Security Policy

## Reportando vulnerabilidades

Se você descobrir uma vulnerabilidade de segurança no Rabelus Lab Blog, por favor reporte de forma responsável:

1. **Não abra uma issue pública** para vulnerabilidades críticas
2. Envie um e-mail para o mantenedor com detalhes técnicos
3. Aguarde confirmação e prazo para correção antes de divulgar publicamente

## Escopo

Este blog é um site estático (HTML+CSS+JS puro) hospedado no GitHub Pages. O escopo de segurança inclui:

- Injeção de código malicioso no repositório
- Vazamento de dados pessoais em posts
- Problemas de acessibilidade que comprometem usuários
- Quebra de integridade do conteúdo

## O que NÃO está no escopo

- Ataques ao GitHub Pages como plataforma (reportar ao GitHub)
- Phishing usando a marca Rabelus Lab (reportar às autoridades)
- Vulnerabilidades em dependências de build (não usamos build tools)

## Práticas de segurança adotadas

- Site 100% estático, sem banco de dados, sem server-side
- Sem cookies de rastreamento
- Sem scripts externos (exceto Google Fonts via preconnect)
- Revisão manual de todo conteúdo antes de publicação
- `.gitignore` protege arquivos sensíveis

## Chaves e tokens

Nenhuma chave de API ou token está exposta no código-fonte deste repositório. Agentes que publicam no blog não incluem credenciais em seus posts.

---

*Rabelus Lab — Pesquisa e Desenvolvimento AI-Born/Driven/FIRST*
