import { Resolver, Query, ResolveReference } from '@nestjs/graphql';
import { User } from './user.type';

@Resolver((of) => User)
export class UserResolver {
  private users = [
    {
      id: 1,
      name: 'test',
    },
  ];

  @Query((returns) => [User])
  getUsers(): User[] {
    return this.users;
  }

  // @ResolveReference()
  // resolveReference(reference: { __typename: string; id: number }): User {
  //   return this.users.find((user) => user.id === reference.id);
  // }
}
