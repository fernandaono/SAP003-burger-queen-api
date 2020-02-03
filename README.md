Recomendamos também o uso do [Postman](https://www.getpostman.com) para você testar suas rotas, ele vai te ajudar a ter um "visual" das requisições e você também pode utilizá-lo para enviar dados através do _header_ e _body_. 

## 3. Objetivos de aprendizagem

Neste projeto, você desenvolverá um servidor web que deverá _servir_ `JSON` através de uma conexão `HTTP`.

Ao final do projeto, você deverá estar familiarizada com conceitos como **rotas** (_routes_), **URLs**, **HTTP** (verbos, request, response, headers, body, status codes, etc), **JSON**, **conexão com uma base de dados** (PostgreSQL), **variáveis de ambiente**, **modelos de arquitetura**, entre outros.


### CLI

A aplicação deve subir através do comando `docker compose up <ambiente>` (_dev_, _prod_ ou _test_), dentro da pasta do projeto. 

## 6. Entrega

O _deploy_ para produção deverá ser feito utilizando um serviço de hospedagem como o [Heroku](https://www.heroku.com/home), que tem integração com o [PostgreSQL](https://www.heroku.com/postgres) (cuidado para não subir as chaves de autenticação para o GitHub do projeto ;)).

## 7. Primeiros Passos


### Conteúdos importantes

* [Como funciona uma requisição HTTP, header e body](https://medium.com/clebertech/como-funciona-uma-requisi%C3%A7%C3%A3o-http-cf76f66fe36e) para relembrarmos pois vai ser super importante
* [Outro artigo sobre requisição HTTP, header e body](http://gabsferreira.com/o-que-e-o-http-como-funciona-request-respose/)


* [Artigo sobre MVC](https://www.profissionaisti.com.br/2014/10/o-conceito-e-as-duvidas-sobre-o-mvc/)
* Documentação do [Postman](https://learning.getpostman.com/docs/postman/launching-postman/introduction/)
* [Vídeo](https://www.youtube.com/watch?v=nSO12ItKDds) sobre como utilizar o Postman (até o minuto 10)
* [Outro vídeo](https://www.youtube.com/watch?v=rI9rhM6iJoI) sobre como utilizar o Postman

### Conteúdo extra

* [Curso de modelagem de dados](https://www.youtube.com/watch?v=Q_KTYFgvu1s) - recomendável assistir a partir desse até pelo menos o episódio sobre a "quinta forma normal"

* [Tutorial super iniciante](https://pplware.sapo.pt/tutoriais/restful-api-node-js/) de como funcionam as rotas e sintaxe do Express, sem banco, somente com um arquivo.


## 9. Checklist

### HTTP API

#### `/products`

* [ ] `GET /products`
* [ ] `GET /products/:productid`
* [ ] `POST /products`
* [ ] `PUT /products/:productid`
* [ ] `DELETE /products/:productid`

#### `/orders`

* [ ] `GET /orders`
* [ ] `GET /orders/:orderid`
* [ ] `POST /orders`
* [ ] `PUT /orders/:orderid`
* [ ] `DELETE /orders/:orderid`

#### `/tables`

* [ ] `GET /tables`
* [ ] `GET /tables/:tableid`
* [ ] `POST /tables`
* [ ] `PUT /tables/:tableid`
* [ ] `DELETE /tables/:tableid`

### Testes unitários

* [ ] Testes unitários para cada função utilizada externamente pela aplicação
