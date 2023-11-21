import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  UsePipes,
  ValidationPipe,
  Body
} from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskDto } from './task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getAll() {
    return this.taskService.getAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() dto: TaskDto) {
    return this.taskService.create(dto);
  }

  @Patch(':id')
  async toggleDone(@Param('id') id: string) {
    return this.taskService.toggleDone(id);
  }
}
