import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from './create-coffee.dto';

// add all fields from CreateCoffeeDto as optional
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
