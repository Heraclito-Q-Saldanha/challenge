import { Inject, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { type DBConnectionType, DRIZZLE } from 'src/drizzle/drizzle.module';
import * as schema from "../drizzle/schema";
import { eq } from 'drizzle-orm';

@Injectable()
export class TasksService {
  constructor(@Inject(DRIZZLE) private db: DBConnectionType) { }

  async create(createTaskDto: CreateTaskDto) {
    const value = {
      ...createTaskDto,
      estimatedHours: createTaskDto.estimatedHours.toString()
    };
    return await this.db.insert(schema.tasks).values(value).returning();
  }

  async findAll() {
    return await this.db.select().from(schema.tasks);
  }

  async findOne(id: string) {
    return await this.db.select().from(schema.tasks).where(eq(schema.tasks.id, id));
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    const value = {
      ...updateTaskDto,
      estimatedHours: updateTaskDto.estimatedHours?.toString()
    };
    return await this.db.update(schema.tasks).set(value).where(eq(schema.tasks.id, id)).returning();
  }

  async remove(id: string) {
    return await this.db.delete(schema.tasks).where(eq(schema.tasks.id, id)).returning();
  }
}
