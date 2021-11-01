import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'cat' })
export class GqlCat {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  age?: number;

  @Field({ nullable: true })
  breed?: string;

  // Used by field resolvers.

  petOwnerId?: string;
}
