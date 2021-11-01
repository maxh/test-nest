import { Module } from '@nestjs/common';
import { PetOwnerService } from './pet-owner.service';
import { GqlPetOwnerResolver } from './gql/gql-pet-owner.resolver';

@Module({
  providers: [PetOwnerService, GqlPetOwnerResolver],
  exports: [PetOwnerService],
})
export class PetOwnersModule {}
