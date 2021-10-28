import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { PetOwnersService } from './pet-owners/pet-owners.service';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService, PetOwnersService],
})
export class AppModule {}
