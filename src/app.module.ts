import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { PetOwnersService } from './pet-owners/pet-owners.service';
import { GraphQLModule } from '@nestjs/graphql';
import * as path from 'path';

@Module({
  imports: [
    CatsModule,
    GraphQLModule.forRoot({
      autoSchemaFile: path.join(process.cwd(), 'src/schema.gql'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PetOwnersService],
})
export class AppModule {}
