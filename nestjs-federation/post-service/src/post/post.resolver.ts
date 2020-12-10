import { Query, Args, ResolveField, Resolver, Parent } from '@nestjs/graphql';
import { User } from '../user/user.type';
import { Post } from './post.type';

@Resolver((of) => Post)
export class PostsResolvers {
  posts: Post[] = [{ authorId: 1, id: 2, title: 'test post' }];

  // @Query((returns) => Post)
  // findPost(@Args('id') id: number): Post {
  //   return this.postsService.findOne(id);
  // }

  @Query((returns) => [Post])
  getPosts(): Post[] {
    return this.posts;
  }

  @ResolveField((of) => User)
  user(@Parent() post: Post): any {
    return { __typename: 'User', id: post.authorId };
  }
}
