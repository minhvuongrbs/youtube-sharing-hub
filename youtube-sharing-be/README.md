<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

- Server is deployed to Azure function
- Database is Mysql which host on Azure Database for MySQL - Flexible Server

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

```bash
# Deploy locally
$ npm run build && func host start

# Deploy production
$ nest deploy azure
```

### Deploy production by vscode

- Choose `Deploy to Function app`
- Address: https://vincentyoutube.azurewebsites.net/api
