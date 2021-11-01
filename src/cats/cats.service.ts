import { Injectable } from '@nestjs/common';
import { Cat } from './types/cat.type';
import { PrismaService } from '../global/prisma.service';
import { CreateCatDto } from './dtos/create-cat.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class CatsService {
  constructor(private prisma: PrismaService) {}

  async create(createCatDto: CreateCatDto) {
    console.log(createCatDto);
    await this.prisma.cat.create({
      data: {
        id: randomUUID(),
        ...createCatDto,
      },
    });
  }

  async findAll(): Promise<Cat[]> {
    return this.prisma.cat.findMany();
  }
}
