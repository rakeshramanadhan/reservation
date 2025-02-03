<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ pnpm install
```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ pnpm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

#### My Notes

# steps

> nest new <project>

> pnpm start:dev

## common library for all micro services like databse access,authentication,logging

> nest generate library common
> pnpm i @nestjs/mongoose mongoose ## pnpm add @nestjs/typeorm typeorm pg @nestjs/config for sql
> pnpm i @nestjs/config

## for creating modules

> nest generate module database -p common
> nest generate module config -p common

## for schema validation and conection install joi

> pnpm i joi
> pnpm add nestjs-pino pino
> pnpm add -D @types/pino

## creatting new app reservation

> nest g app reservations
> nest g resource reservations

## for validation

> pnpm i class-validator class-transformer

## for logging update main.ts in reservations

> pnpm i nestjs-pino pino-http

## for pretty listing of log

> pnpm i pino-pretty

## seperate the logger in common for using all apps

## adding valiation

step1: add useGlobalPipes in main.ts
step2: add decorators in create-reservation.dto

##major decortators are

import {
IsAlphanumeric,
IsEmail,
IsEnum,
IsInt,
IsNotEmpty,
IsString,
IsDate,
Matches,
MinLength,
} from 'class-validator';

## dockerastion of each application in microservice

step1 create DockerFile in reservations app root
step2 use node Alphine Image for dockerization

-create DockerFile

# add instruction set template for deploy the application

-create .dockerignore file

# add node_modules under .dockerignore file

> cd apps/reservations

> docker build ../../ -f DockerFile -t sleepr_reservations

# to run the docker

> docker run sleepr_reservations

# to specify the envrioment varibales create docker-compose.yaml

> docker-compose down --volumes
> docker-compose build --no-cache
> docker-compose up

## new app reservation

> nest g app auth
> nest g module users
> nest g controller users

# import DatabaseModule in userModule

# add useglobalPipes and uselogger in main module

# add Logger module in auth module

## impliment authentication middleware using passport

> pnpm i @nestjs/passport passport passport-local

# For passport development dependencies

> pnpm i -D @types/passport-local

# for passport jwt

> pnpm i @nestjs/jwt passport-jwt

## For jwt development dependencies

> # pnpm i -D @types/passport-jwt
>
> "# mynestpro"
>
> > > > > > > 091a795dde9c0a64c28f12b1b69c6f11909583cc

const crypto = require('crypto');//generate random string

// Generate a 32-byte random string

## for encript the password

> pnpm i bcryptjs express
> pnpm i -d @types/bcryptjs

> pnpm i cookie-parser

> pnpm i -d @types/cookie-parser
