import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const serverPort = process.env.PORT || 3001;

  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(serverPort);
  console.log(`Server is running on http://localhost:${serverPort}/api`);
}

bootstrap();
