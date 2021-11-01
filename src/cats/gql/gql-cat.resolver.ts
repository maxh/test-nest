import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { CatsService } from '../cats.service';
import { GqlCat } from './gql-cat.type';
import { PetOwner } from '../../pet-owners/types/pet-owner.type';
import { PetOwnerService } from '../../pet-owners/pet-owner.service';
import { GqlPetOwner } from '../../pet-owners/gql/gql-pet-owner.type';

@Resolver((of) => GqlCat)
export class GqlCatResolver {
  constructor(
    private readonly catsService: CatsService,
    private readonly petOwnerService: PetOwnerService,
  ) {}

  @Query((returns) => [GqlCat])
  cats(): Promise<GqlCat[]> {
    return Promise.resolve(this.catsService.findAll());
  }

  @ResolveField((returns) => GqlPetOwner)
  owner(@Parent() parent: GqlCat): Promise<GqlPetOwner> {
    return Promise.resolve(this.petOwnerService.findOne(parent.ownerId));
  }
}
