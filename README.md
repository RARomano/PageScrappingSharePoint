# PageScrapping - SharePoint
Page/Web scrapping é uma técnica para extrair dados/informações de sites na web.

Existem várias formas de implementar essa técnica e uma delas é utilizar-se de um headless browser e simular a navegação do usuário.

No exemplo que criei, a ferramenta entra em um site do SharePoint Online, se loga com o usuário e senha fornecidos e tira um print da tela inicial, após o login.

> Esse é só um exemplo, você pode adaptar esse código para navegar em todo o seu site, simulando as ações de um usuário específico e tirar as evidências da navegação. Esse processo pode ser muito útil em testes/bugfixing.

## Pré-Requisitos
- Node JS
- CasperJS: ```[sudo] npm install -g casperjs```
- PhantomJS: ```[sudo] npm install -g phantomjs```

## Rodando o script
```bash
casperjs server.js [url] [usuario] [senha] [pasta_destino]
```
exemplo:
```bash
casperjs server.js https://[tenant].sharepoint.com usuario senha ~/Documents/imgs
```

