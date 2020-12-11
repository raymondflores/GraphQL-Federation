import { Directive, Field, ID, Int, ObjectType } from 'type-graphql'
import { User } from './User'

@ObjectType()
@Directive('@key(fields: "id")')
export class Post {
  @Field(() => ID)
  id: number

  @Field()
  title: string

  @Field(() => Int)
  authorId: number

  @Field(() => User)
  user?: User
}
