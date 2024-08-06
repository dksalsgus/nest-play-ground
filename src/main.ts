import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const PORT: number = 3000;
  await app.listen(PORT);
  console.log(`Listening PORT ${PORT}`);
  //
}
bootstrap();
