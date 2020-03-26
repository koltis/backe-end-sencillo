import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({origin:'http://localhost:4200',credentials:true})
  const options = new DocumentBuilder()
    .setTitle('post example')
    .setDescription('The post API description')
    .setVersion('1.0')
    .addTag('Simple post')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
