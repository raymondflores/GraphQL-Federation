import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Post } from '../post/post.type';
import { User } from './user.type';

@Resolver((of) => User)
export class UsersResolvers {
  @ResolveField((of) => [Post])
  public posts(@Parent() user: User): Post[] {
    return [
      {
        authorId: 1,
        id: 3,
        title: 'wow',
      },
    ];
  }
}
