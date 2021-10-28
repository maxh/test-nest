import { Module } from '@nestjs/common';
import { PetOwnersService } from './pet-owners.service';

@Module({
  providers: [PetOwnersService],
})
export class PetOwnersModule {}
