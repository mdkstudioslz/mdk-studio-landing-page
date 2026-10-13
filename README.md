# Landing Page MDK Studio

Este é o repositório da landing page da MDK Studio, um projeto desenvolvido em React e estilizado com Tailwind CSS.

## Sobre

A landing page foi criada com o objetivo de apresentar a MDK Studio, seus serviços e produtos de forma atraente e informativa.

## Tecnologias Utilizadas

- React
- Tailwind CSS

## Ambiente de desenvolvimento

Use Node.js 26.11.1, definido em `.nvmrc`, e o npm fornecido com essa versão.
Com o fnm instalado, execute no PowerShell:

```powershell
fnm env --use-on-cd --shell power-shell | Out-String | Invoke-Expression
fnm install
fnm use
npm ci
if (-not (Test-Path .env)) { Copy-Item .env.example .env }
npm run dev
```

Copie `.env.example` apenas se ainda não houver um `.env` local e preencha as
variáveis do EmailJS antes de testar o formulário.

Para gerar a versão de produção, execute `npm run build`.
O projeto também aceita Node.js 24 para publicação na Vercel, cuja documentação
atualmente lista 24.x como a versão mais recente suportada. O campo `engines.node`
mantém essa compatibilidade; o desenvolvimento local usa Node.js 26.

## Como Contribuir

Para contribuir com o projeto, siga os passos abaixo:

1. Faça um fork deste repositório.
2. Crie uma branch para a sua feature: `git checkout -b minha-feature`.
3. Faça commit das suas alterações: `git commit -m 'Minha nova feature'`.
4. Faça push para a sua branch: `git push origin minha-feature`.
5. Envie um pull request.

## Autores

- [Davi Komura](https://github.com/davikomura)
- [Daniel Lima](https://github.com/daniel99korban)
- [Felipe Macedo](https://github.com/macedoflp)

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE.md](LICENSE.md) para mais detalhes.
