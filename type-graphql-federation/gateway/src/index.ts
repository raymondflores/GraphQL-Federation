import 'reflect-metadata'
import { ApolloGateway } from '@apollo/gateway'
import { ApolloServer } from 'apollo-server'

async function bootstrap() {
  const serviceList = [
    { name: 'users', url: 'http://localhost:3000/graphql' },
    { name: 'posts', url: 'http://localhost:3001/graphql' }
  ]

  const gateway = new ApolloGateway({
    serviceList
  })

  const { schema, executor } = await gateway.load()

  const server = new ApolloServer({
    schema,
    executor,
    tracing: false,
    playground: true
  })

  server.listen({ port: 3002 }).then(({ url }: { url: string }) => {
    console.log(`Apollo Gateway ready at ${url}`)
  })
}

bootstrap().catch(console.error)
