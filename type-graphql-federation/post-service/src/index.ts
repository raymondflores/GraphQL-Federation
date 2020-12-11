import 'reflect-metadata'
import Express from 'express'

import { ApolloServer } from 'apollo-server-express'
// import { buildSchema } from 'type-graphql'
import { buildFederatedSchema } from './helpers/buildFederatedSchema'
import { PostResolver } from './resolvers/post'
import { UsersResolvers } from './resolvers/user'

const main = async () => {
  const app = Express()

  const schema = await buildFederatedSchema({
    resolvers: [PostResolver, UsersResolvers],
    emitSchemaFile: true,
    validate: false
  })

  const server = new ApolloServer({
    schema,
    context: ({ req, res }) => ({ req, res })
  })

  server.applyMiddleware({ app, cors: false })

  app.listen({ port: 3001 }, async () => {
    console.log(`🚀 Server ready and listening at ==> http://localhost:3001${server.graphqlPath}`)
  })
}

main().catch(error => {
  console.log(error, 'error')
})
