import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'pet owner' })
export class GqlPetOwner {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;
}
