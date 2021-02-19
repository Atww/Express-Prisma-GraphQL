import express from 'express'
import config from './config'
import { schema } from './prisma/schema'
import { context } from './prisma/context'
import { graphqlHTTP } from 'express-graphql'

const app = express()
app.get('/', (request, response) => {
    response.send('Hello world!');
});
app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        context: context,
        graphiql: true,
    }),
)
app.listen(config.port, () => {
    console.log(`\
    🚀 Server ready at: http://localhost:4000/graphql
    ⭐️ See sample queries: http://pris.ly/e/ts/graphql#using-the-graphql-api
    `)
})
