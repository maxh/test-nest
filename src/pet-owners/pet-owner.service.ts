import { Injectable } from '@nestjs/common';
import { PetOwner } from './types/pet-owner.type';

@Injectable()
export class PetOwnerService {
  private readonly petOwners: PetOwner[] = [];

  create(petOwner: PetOwner) {
    this.petOwners.push(petOwner);
  }

  findAll(): PetOwner[] {
    return this.petOwners;
  }
}
