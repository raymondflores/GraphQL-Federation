import 'reflect-metadata'
import Express from 'express'

import { ApolloServer } from 'apollo-server-express'
// import { buildSchema } from 'type-graphql'
import { UserResolver } from './resolvers/user'
import { buildFederatedSchema } from './helpers/buildFederatedSchema'
import { resolveUserReference } from './user-reference'

const main = async () => {
  const app = Express()

  const schema = await buildFederatedSchema(
    {
      resolvers: [UserResolver],
      emitSchemaFile: true,
      validate: false
    },
    {
      User: { __resolveReference: resolveUserReference }
    }
  )

  const server = new ApolloServer({
    schema,
    context: ({ req, res }) => ({ req, res })
  })

  server.applyMiddleware({ app, cors: false })

  app.listen({ port: 3000 }, async () => {
    console.log(`🚀 Server ready and listening at ==> http://localhost:3000${server.graphqlPath}`)
  })
}

main().catch(error => {
  console.log(error, 'error')
})
