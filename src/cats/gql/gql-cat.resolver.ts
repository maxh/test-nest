import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { CatsService } from '../cats.service';
import { GqlCat } from './gql-cat.type';

@Resolver(of => GqlCat)
export class GqlCatResolver {
  constructor(private readonly catsService: CatsService) {}

  @Query(returns => [GqlCat])
  cats(): Promise<GqlCat[]> {
    return Promise.resolve(this.catsService.findAll());
  }
}
