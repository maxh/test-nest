import { Injectable } from '@nestjs/common';
import { Cat } from './types/cat.type';
import { CreateCatDto } from './dtos/create-cat.dto';
import { randomUUID } from 'crypto';
import { CatsDb } from './cats.db';

@Injectable()
export class CatsService {
  constructor(private catsDb: CatsDb) {}

  async create(createCatDto: CreateCatDto) {
    await this.catsDb.cat.create({
      data: {
        id: randomUUID(),
        ...createCatDto,
      },
    });
  }

  async findAll(): Promise<Cat[]> {
    return this.catsDb.cat.findMany();
  }
}
