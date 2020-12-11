import { Directive, ObjectType, Field, ID } from 'type-graphql'
import { Post } from './Post'

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class User {
  @Field(() => ID)
  @Directive('@external')
  id: number

  @Field(() => [Post])
  posts?: Post[]
}
