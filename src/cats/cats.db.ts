import { PrismaService } from '../global/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsDb {
  constructor(private prisma: PrismaService) {}

  get cat() {
    return this.prisma.cat;
  }
}
