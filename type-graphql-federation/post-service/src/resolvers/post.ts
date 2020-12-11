import { Resolver, Query, FieldResolver, Root } from 'type-graphql'
import { Post } from '../entities/Post'
import { User } from '../entities/User'

@Resolver(_of => Post)
export class PostResolver {
  @Query(_returns => [Post])
  getPosts(): Post[] {
    return [
      {
        id: 1,
        authorId: 2,
        title: 'Post Title'
      }
    ]
  }

  @FieldResolver(() => User)
  user(@Root() post: Post): any {
    console.log('hi', post)
    return { __typename: 'User', id: post.authorId }
  }
}
