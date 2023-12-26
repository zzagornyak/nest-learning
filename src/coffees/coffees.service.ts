import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { CreateCoffeeDto } from './dto/create-coffee.dto';

@Injectable()
export class CoffeesService {
    private coffees: Coffee[] = [
        {
            id: 1,
            name: 'Shipwreck Roast',
            brand: 'Buddy Brew',
            flavors: ['chocolate', 'vanilla'],
        },
        {
            id: 2,
            name: 'Expresso Roast',
            brand: 'Starbucks',
            flavors: ['chocolate', 'caramel'],
        },
        {
            id: 3,
            name: 'Folgers',
            brand: 'Folgers',
            flavors: ['chocolate', 'vanilla'],
        },
        {
            id: 4,
            name: 'Columbian',
            brand: 'Starbucks',
            flavors: ['chocolate', 'caramel'],
        },
        {
            id: 5,
            name: 'Columbian',
            brand: 'Folgers',
            flavors: ['chocolate', 'vanilla'],
        },
    ];

    findAll() {
        return this.coffees;
    }

    findOne(id: string) {
        return this.coffees.find((item) => item.id === +id);
    }

    create(createCoffeeDto: CreateCoffeeDto) {
        // this.coffees.push(createCoffeeDto as Coffee);
        return createCoffeeDto;
    }

    update(id: string, updateCoffeeDto: UpdateCoffeeDto) {
        const existingCoffee = this.findOne(id);
        if (existingCoffee) {
            this.coffees = this.coffees.map((item) => {
                if (item.id === +id) {
                    for (const key in updateCoffeeDto) {
                        if (updateCoffeeDto.hasOwnProperty(key)) {
                            item[key] = updateCoffeeDto[key];
                        }
                    }
                }
                return item;
            });
        }
    }

    remove(id: string) {
        const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);
        if (coffeeIndex >= 0) {
            this.coffees.splice(coffeeIndex, 1);
        }
    }
}
