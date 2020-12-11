import { FieldResolver, Resolver, Root } from 'type-graphql'
import { User } from '../entities/User'
import { Post } from '../entities/Post'

@Resolver(() => User)
export class UsersResolvers {
  @FieldResolver(() => [Post])
  public posts(@Root() user: User): Post[] {
    console.log(user, 'user')
    return [
      {
        authorId: 1,
        id: 3,
        title: 'wow'
      }
    ]
  }
}
