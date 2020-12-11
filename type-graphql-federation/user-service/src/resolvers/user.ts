import { Resolver, Query } from 'type-graphql'
import { User } from '../entities/User'

@Resolver(_of => User)
export class UserResolver {
  @Query(_returns => User)
  me(): User {
    return {
      id: 1,
      name: 'Ada Lovelace'
    }
  }

  @Query(() => [User])
  getUsers(): User[] {
    return [
      {
        id: 1,
        name: 'Ada Lovelace'
      }
    ]
  }
}
