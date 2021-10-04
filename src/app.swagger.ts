
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export const initSwagger = (app: INestApplication) => {
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Mangus Test API')
    .addBearerAuth()
    .setDescription(
      'Esta es una API Creada con NestJS con un CRUD básico para Prueba de la empresa Mangus.',
    )
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/docs', app, document);
};