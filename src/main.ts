import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(
        new ValidationPipe({
            // White list means that only properties that are defined in the DTO will be allowed
            // to pass through the validation pipe. If a property is not defined in the DTO, it will be stripped out.
            whitelist: true,
            // Forbid non-whitelisted properties
            forbidNonWhitelisted: true,
            // Transform incoming data to DTO instance
            transform: true,
        }),
    );
    await app.listen(3000);
}
bootstrap();
