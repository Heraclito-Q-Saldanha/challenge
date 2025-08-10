import { Inject, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { type DBConnectionType, DRIZZLE } from 'src/drizzle/drizzle.module';
import * as schema from "../drizzle/schema";
import { count, eq } from 'drizzle-orm';

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

  async findAll(skip: number, limit: number) {
    return await this.db
      .select()
      .from(schema.tasks)
      .offset(skip)
      .limit(limit);
  }

  async countByPriority() {
    const data = await this.db
      .select({ priority: schema.tasks.priority, total: count(schema.tasks.priority) })
      .from(schema.tasks)
      .groupBy(schema.tasks.priority);

    const low = data.find(c => c.priority == "LOW");
    const medium = data.find(c => c.priority == "MEDIUM");
    const high = data.find(c => c.priority == "HIGH");

    return {
      LOW: low?.total ?? 0,
      MEDIUM: medium?.total ?? 0,
      HIGH: high?.total ?? 0,
    };
  }

  async findOne(id: string) {
    return (await this.db.select().from(schema.tasks).where(eq(schema.tasks.id, id)))[0];
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    const value = {
      ...updateTaskDto,
      estimatedHours: updateTaskDto.estimatedHours?.toString()
    };
    return (await this.db.update(schema.tasks).set(value).where(eq(schema.tasks.id, id)).returning())[0];
  }

  async remove(id: string) {
    return await this.db.delete(schema.tasks).where(eq(schema.tasks.id, id)).returning();
  }
}
