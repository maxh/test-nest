import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { GqlPetOwner } from './gql-pet-owner.type';
import { PetOwnerService } from '../pet-owner.service';

@Resolver(of => GqlPetOwner)
export class GqlPetOwnerResolver {
  constructor(private readonly petOwnerService: PetOwnerService) {}

  @Query(returns => [GqlPetOwner])
  petOwners(): Promise<GqlPetOwner[]> {
    return Promise.resolve(this.petOwnerService.findAll());
  }
}
