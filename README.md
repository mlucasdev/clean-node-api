# CLEAN NODE API 

Essa API faz parte do treinamento do professor Rodrigo Manguinho (Mango) na Udemy.

O objetivo do treinamento é mostrar como criar uma API com uma arquitetura bem definida e desacoplada, utilizando TDD (programação orientada a testes) como metodologia de trabalho, Clean Architecture para fazer a distribuição de responsabilidades em camadas, sempre seguindo os princípios do SOLID e, sempre que possível, aplicando Design Patterns para resolver alguns problemas comuns.


## APIs construídas no treinamento

1. [Cadastro](./requirements/signup.md)
2. [Login](./requirements/login.md)
3. [Criar enquete](./requirements/add-survey.md)
4. [Listar enquetes](./requirements/load-surveys.md)
5. [Responder enquete](./requirements/save-survey-result.md)
6. [Resultado da enquete](./requirements/load-survey-result.md)


## Princípios

- Single Responsibility Principle (SRP)
- Open Closed Principle (OCP)
- Liskov Substitution Principle (LSP)
- Interface Segregation Principle (ISP)
- Dependency Inversion Principle (DIP)
- Separation of Concerns (SOC)
- Don't Repeat Yourself (DRY)
- You Aren't Gonna Need It (YAGNI)
- Keep It Simple, Silly (KISS)
- Composition Over Inheritance
- Small Commits


## Design Patterns

- Factory
- Adapter
- Composite
- Decorator
- Proxy
- Dependency Injection
- Abstract Server
- Composition Root
- Builder
- Singleton


## Metodologias e Designs

- TDD
- Clean Architecture
- DDD
- Conventional Commits
- GitFlow
- Modular Design
- Dependency Diagrams
- Use Cases
- Continuous Integration
- Continuous Delivery
- Continuous Deployment


## Bibliotecas e Ferramentas

- NPM
- Typescript
- Git
- Jest
- MongoDb
- Bcrypt
- JsonWebToken
- Validator
- Express
- Supertest
- Husky
- Lint Staged
- Eslint
- Standard Javascript Style
- Sucrase
- In-Memory MongoDb Server


## Features do Node

- API Rest com Express
- Log de Erro
- Segurança (Hashing, Encryption e Encoding)
- CORS
- Middlewares


## Features do Git

- Alias
- Log Personalizado
- Branch
- Reset
- Amend
- Tag
- Stash
- Merge


## Features do Typescript

- POO Avançado
- Interface
- TypeAlias
- Utility Types
- Modularização de Paths
- Configurações
- Build


## Features de Testes

- Testes Unitários
- Testes de Integração (API Rest)
- Cobertura de Testes
- Test Doubles
- Mocks
- Stubs
- Spies
- Fakes

## Features do MongoDb

- Connect e Reconnect
- Collections
- InsertOne e InserMany
- Find, FindOne e FindOneAndUpdate
- DeleteMany
- UpdateOne
- ObjectId


## Pré-requisitos

É imprescindível que você tenha instalado em seu computador o NodeJs e o MongDB para que possa executar e testar este projeto.

- **Node** - [https://nodejs.org/en/download/](https://nodejs.org/pt-br/download/)
- **MongoDB** - [https://www.mongodb.com/try/download/community/](https://www.mongodb.com/try/download/community)

## Instalação

 Exemplo:

 Clone esse projeto em seu computador com o comando:

 ```
 	git clone [https://github.com/codedbylucas/clean-node-api.git]
 ```

 Acesse a pasta do projeto seu terminal:

 ```
 	cd [clean-node-api]
 ```

 Já pasta da aplicação em seu terminal, digite o seguinte comando:

 ```
 	npm install
 ```


## Execução

Após ter configurado o projeto e ter aguardado a instalação das dependencias de desenvolvimento, execute o comando:

```
 	npm start
```

 Caso queira que o projeto rode automaticamente após fazer alguma alteração no código execute o comando:

 ```
 	npm run start:dev
 ```

Para executar todos os testes do projeto execute o comando:

 ```
 	npm test
 ```

Para executar apenas os testes unitários execute o comando:

 ```
 	npm run test:unit
 ```

Para executar apenas os testes de integração execute o comando:

 ```
 	npm run test:integration
 ```

Para visualizar a cobertura de testes do projeto execute o comando:

 ```
 	npm run test:ci
 ```


## Autor

- **Lucas Marques** - Desenvolvedor - [Github](https://github.com/codedbylucas) | [Linkedin](https://www.linkedin.com/in/codedbylucas/)
 
