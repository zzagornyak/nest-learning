import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Query,
} from '@nestjs/common';

// Services
import { CoffeesService } from './coffees.service';

// DTO
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeesService: CoffeesService) {}

    @Get()
    findAll(@Query() paginationQuery) {
        // const { limit, offset } = paginationQuery;
        return this.coffeesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.coffeesService.findOne(id);
    }

    @Post()
    create(@Body() body: CreateCoffeeDto) {
        return this.coffeesService.create(body);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body: UpdateCoffeeDto) {
        return this.coffeesService.update(id, body);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.coffeesService.remove(id);
    }
}


// import {
//     Controller,
//     Get,
//     Param,
//     Post,
//     Body,
//     // HttpCode,
//     // HttpStatus,
//     // Res,
//     Delete,
//     Patch,
// } from '@nestjs/common';

// import { CoffeesService } from './coffees.service';
// import { CreateCoffeeDto, UpdateCoffeeDto } from './dto/create-coffee.dto';

// @Controller('coffees')
// export class CoffeesController {
//     constructor(private readonly coffeesService: CoffeesService) {}
//     // GET
//     @Get()
//     findAll() {
//         return this.coffeesService.findAll();
//     }

//     @Get(':id')
//     findOne(@Param('id') id: string) {
//         // return `This action returns #${id} coffee`;
//         return this.coffeesService.findOne(id);
//     }

//     @Delete(':id')
//     remove(@Param('id') id: string) {
//         return this.coffeesService.remove(id);
//     }

//     @Patch(':id')
//     update(@Param('id') id: string, @Body() UpdateCoffeeDto: UpdateCoffeeDto) {
//         return this.coffeesService.update(id, UpdateCoffeeDto);
//     }

//     // POST
//     @Post()
//     // if need to change the status code
//     // @HttpCode(HttpStatus.I_AM_A_TEAPOT)
//     create(@Body() createCoffeeDto: CreateCoffeeDto) {
//         return this.coffeesService.create(createCoffeeDto);
//     }
//     // limit and offset query params
//     // findAll(@Query() paginationQuery) {
//     //     const { limit, offset } = paginationQuery;
//     //     return `This action returns all coffees. Limit ${limit}, offset: ${offset}`;
//     // }

//     // Response object
//     // @Get()
//     // findAll(@Res() response) {
//     //     response.status(201).send('This action returns all coffees');
//     // }

//     // Dynamic route
//     // @Get(':id')
//     // findOne(@Param() params) {
//     //     return `This action returns ${params.id} coffee`;
//     // }

//     // One param

//     // NESTED ROUTES
//     // TODO: передивитись відео про nested routes
//     @Get('flavors')
//     findFlavors() {
//         return 'This action returns all flavors';
//     }

//     // Simple post route
//     // @Post()
//     // create(@Body() body) {
//     //     return body;
//     // }

//     // One param
//     // other params woundn't be validated
//     // @Post()
//     // create(@Body('name') body) {
//     //     return body;
//     // }

//     // Patch route
//     // @Patch(':id')
//     // update(@Param('id') id: string, @Body() body) {
//     //     return this.coffeesService.update(id, body);
//     // }
// }
