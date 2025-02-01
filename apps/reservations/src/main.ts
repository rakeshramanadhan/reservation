import { NestFactory } from '@nestjs/core';
import { ReservationsModule } from './reservations.module';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import { ConfigService } from '@nestjs/config';
async function bootstrap() {
  const app = await NestFactory.create(ReservationsModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useLogger(app.get(Logger));
  // console.log(`Port: ${process.env.PORT}`);
  const configService = app.get(ConfigService);

  console.log('Loaded .env file:', configService.get('ENV_FILE_PATH'));
  console.log('PORT:', configService.get('PORT'));
  console.log('MONGODB_URI:', configService.get('MONGODB_URI'));
  // await app.listen(configService.get('PORT'));
}
bootstrap();
