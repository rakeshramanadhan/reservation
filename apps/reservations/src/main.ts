import { NestFactory } from '@nestjs/core';
import { ReservationsModule } from './reservations.module';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import { ConfigService } from '@nestjs/config';
async function bootstrap() {
  const app = await NestFactory.create(ReservationsModule);
  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useLogger(app.get(Logger));
  const configService = app.get(ConfigService);
  const port = configService.get('PORT');
  console.log('Loaded .env file:', configService.get('ENV_FILE_PATH'));
  console.log('Loaded PORT:', configService.get('PORT'));
  console.log('Loaded MONGODB_URI:', configService.get('MONGODB_URI'));
  if (!port) {
    throw new Error('PORT is not defined in the configuration');
  }
  await app.listen(port);
}
bootstrap();
