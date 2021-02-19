import express from 'express'
import config from './config'

const app = express()
app.get('/', (request, response) => {
    response.send('Hello world!');
});
// app.use(
//   '/graphql',
//   graphqlHTTP({
//     schema: schema,
//     context: context,
//     graphiql: true,
//   }),
// )
app.listen(config.port, () => {
    console.log(`\
    🚀 Server ready at: http://localhost:4000/graphql
    ⭐️ See sample queries: http://pris.ly/e/ts/graphql#using-the-graphql-api
    `)
})
