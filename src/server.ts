import App from './app';
import * as bodyParser from 'body-parser'
import { schema } from './prisma/schema'
import { context } from './prisma/context'
import { graphqlHTTP } from 'express-graphql'
import { PrismaClient, Prisma } from "@prisma/client";
import HomeController from './controller/home.controller';
import config from './config';
import loggerMiddleware from './middleware/logger';

const app = new App({
    port: config.port,
    controllers: [
        new HomeController(),
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        loggerMiddleware
    ]
})

app.GraphQL(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        context: context,
        graphiql: true,
    }),
)

app.listen()