import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';

@Module({
    imports: [
        CoffeesModule,
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'postgres123',
            database: 'postgres',
            autoLoadEntities: true,
            synchronize: true, // TODO: ALWAYS disable synchronize in production!
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
