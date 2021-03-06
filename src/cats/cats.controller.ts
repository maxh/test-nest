import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCatDto } from './dtos/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './types/cat.type';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    await this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
