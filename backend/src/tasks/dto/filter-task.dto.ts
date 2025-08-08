import { IsOptional, IsNumber, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

export class FilterTaskDto {
    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    @Min(0)
    skip: number = 0;

    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    @Min(1)
    @Max(100)
    limit: number = 15;
}
