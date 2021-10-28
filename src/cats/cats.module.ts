import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { GqlCatResolver } from './gql/gql-cat.resolver';

@Module({
  controllers: [CatsController],
  providers: [CatsService, GqlCatResolver],
})
export class CatsModule {}
