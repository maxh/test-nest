import { Injectable } from '@nestjs/common';
import { PetOwner } from './types/pet-owner.type';

@Injectable()
export class PetOwnersService {
  private readonly petOwners: PetOwner[] = [];

  create(cat: PetOwner) {
    this.petOwners.push(cat);
  }

  findAll(): PetOwner[] {
    return this.petOwners;
  }
}
