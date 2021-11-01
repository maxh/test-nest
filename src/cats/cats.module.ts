import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { GqlCatResolver } from './gql/gql-cat.resolver';
import { PetOwnersModule } from '../pet-owners/pet-owners.module';
import { GlobalModule } from '../global/global.module';

@Module({
  imports: [PetOwnersModule, GlobalModule],
  controllers: [CatsController],
  providers: [CatsService, GqlCatResolver],
})
export class CatsModule {}
