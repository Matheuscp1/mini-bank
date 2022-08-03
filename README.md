# API Base de NodeJS
Esse projeto tem por objetivo facilitar a criação de futuros projetos e servir como base para estrutura e aproveitar as suas funcionalidades.

## Versão
Esse projeto utiliza NodeJS 14.15.0.

## Funcionalidades 
Esse projeto já possui algumas bibliotecas e funcionalidades prontas, como as seguintes:
* [x] TypeORM (ORM para modelagem de Banco de Dados)
* [x] ESLint (Ferramenta para manter o código padronizado e evitar erros)
* [x] Git Commit Linter (Verifica todo commit realizado se ele segue as convenções de nomenclatura do GIT)

## Estrutura
O projeto está estruturado de forma que consiga desacoplar o máximo de funcionalidades da outra, para que haja o mínimo de dependências do mesmo arquivo e para que possam reaproveitar funções sem a necessidade de duplicar o mesmo código.

A pasta "Routes", está separada de acordo com a entidade necessária, e todas elas são unificadas dentro do arquivo "router.ts". 
Caso queira que a rota seja autenticada, é necessário adicionar o middleware "AuthMiddleWare", sendo assim, ele irá verificar se a requisição possui um token válido.

Após isso, a rota invoca um método da Controller. A controller vai ser responsável por verificar se os parâmetros passados estão no padrão exigido, e após isso, irá chamar a funcionalidade dentro de "useCases". A ideia do "useCases", é desacoplar cada funcionalidade para evitar controllers extensas e corra o risco de quebrar alguma função.

Caso seja necessário enviar alguma resposta de erro, dentro da pasta "errors" possui vários modelos de erros configurados com os códigos corretos, facilitando a maneira de executar isso, como por exemplo o lançamento de um BadRequest:
```
throw new BadRequest('e-mail')
```
O sistema possui um handler de erros que irá tratá-lo e mandar corretamente ao usuário, com o código correto e a mensagem correta.

## Comandos
Para baixar as depêndencias do projeto de desenvolvimento, certifique-se de estar utilizando a versão correta do NodeJS e execute o seguinte comando:
```
npm install
```
Caso suba esse código para produção, não é necessário baixar as dependências de desenvolvimento, então use o seguinte comando:
```
npm install --production
```
Para realizar o build do projeto, utilize o seguinte comando:
```
npm run build
```
Para executar o projeto em ambiente de desenvolvimento:
```
npm run dev
```
Para executar o projeto em ambiente de produção:
```
npm start
```
## Banco de Dados
Para manter o banco de dados versionado, este projeto utiliza a orm TypeORM e utiliza o modelo de migrations.

Para gerar uma nova migration:
```
npm run typeorm migration:generate -- -n [nomeMigration]
```

Para reverter a última migration:
```
npm run typeorm migration:revert
```

Para executar a migration:
```
npm run typeorm migration:run
```

