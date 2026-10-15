# Hub de clientes 10Complicado

Base estática para hubs individuais de clientes, pronta para publicação no Netlify.

## Estrutura atual

- `outputs/hub-base/index.html`: hub principal.
- `outputs/hub-base/config.js`: dados e links do cliente.
- `outputs/hub-base/controle.html`: Controle Comercial funcional no navegador.
- `outputs/hub-base/styles.css`: identidade visual compartilhada.
- `netlify.toml`: configuração de publicação e rotas.

## Criar um novo cliente

1. Duplique `outputs/hub-base`.
2. Renomeie a cópia com o identificador do cliente.
3. Edite apenas o `config.js`.
4. Substitua nome, logo, tags, links, endereço, horários e WhatsApp.
5. Crie um novo site Netlify apontando para a pasta publicada.

## Publicação no Netlify

No Netlify, importe o repositório Git e use:

- Build command: vazio.
- Publish directory: `outputs/hub-base`.

Após cada push no repositório, o Netlify gera um novo deploy automaticamente.

## Próxima etapa

O Controle Comercial ainda salva dados no navegador. Para uso compartilhado entre agência e cliente, a próxima etapa é conectar a interface a um banco de dados e adicionar autenticação por cliente.
