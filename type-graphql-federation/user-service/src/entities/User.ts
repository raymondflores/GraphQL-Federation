import { Field, ObjectType, ID, Directive } from 'type-graphql'

@ObjectType()
@Directive('@key(fields: "id")')
export class User {
  @Field(_type => ID)
  id: number

  @Field()
  name: string
}
