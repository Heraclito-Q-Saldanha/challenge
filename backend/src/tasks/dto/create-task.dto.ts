import { IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export enum Priority {
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH',
}

export enum Status {
    TODO = 'TODO',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',
}

export class CreateTaskDto {
    title: string;
    description: string;
    priority: Priority;
    status: Status;
    @Type(() => Date)
    @IsDate()
    dueDate: Date;
    assignedTo: string;
    tags: string[];
    estimatedHours: number;
}
