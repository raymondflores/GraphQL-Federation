import { Directive, ObjectType, Field, ID } from '@nestjs/graphql';
import { Post } from '../post/post.type';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class User {
  @Field((type) => ID)
  @Directive('@external')
  id: number;

  @Field((type) => [Post])
  posts?: Post[];
}
