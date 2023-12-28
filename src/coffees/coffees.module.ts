import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// Controller
import { CoffeesController } from './coffees.controller';
// Service
import { CoffeesService } from './coffees.service';
// Entity
import { Coffee } from './entities/coffee.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Coffee])],
    controllers: [CoffeesController],
    providers: [CoffeesService],
})
export class CoffeesModule {}
