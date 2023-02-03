import { HttpException, HttpStatus, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function start() {
  try {
    const PORT = process.env.PORT || 8090;
    const app = await NestFactory.create(AppModule, { cors: true });
    const config = new DocumentBuilder()
      .setTitle('Petly')
      .setDescription('DOCS Petly')
      .setVersion('1.0')
      .addTag('petly')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
    app.useGlobalPipes(new ValidationPipe());
    app.enableCors({
      allowedHeaders: ['content-type', 'authorization'],
      origin: process.env.CLIENT_HOST,
      credentials: true,
    });

    return await app.listen(PORT);
  } catch (error) {
    throw new HttpException('Server error', HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
start();
