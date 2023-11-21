import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskDto } from './task.dto';
import { PrismaService } from './prisma.service';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async getById(id: string) {
    const task = await this.prisma.task.findUnique({
      where: {
        id: +id
      }
    });
    if (!task) throw new NotFoundException('task not found');
    return task;
  }
  //   private TASKS = [{ id: 1, name: 'Выучить nest!', isDone: false }];
  getAll() {
    return this.prisma.task.findMany();
  }

  create(dto: TaskDto) {
    return this.prisma.task.create({ data: dto });
  }

  async toggleDone(id: string) {
    const task = await this.getById(id);
    task.isDone = !task.isDone;
    return this.prisma.task.update({
      where: {
        id: +id
      },
      data: {
        isDone: !task.isDone
      }
    });
  }
}
