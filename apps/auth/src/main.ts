import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { Logger } from 'nestjs-pino';
import { ConfigService } from '@nestjs/config';
import { Transport } from '@nestjs/microservices';
async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  const configService = app.get(ConfigService);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: configService.get('TCP_PORT'),
    },
  });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.use(cookieParser());
  app.useLogger(app.get(Logger));

  await app.startAllMicroservices();
  const port = configService.get('HTTP_PORT');
  console.log('Loaded .env file:', configService.get('ENV_FILE_PATH'));
  console.log('Loaded PORT:', configService.get('PORT'));
  console.log('Loaded MONGODB_URI:', configService.get('MONGODB_URI'));
  if (!port) {
    throw new Error('PORT is not defined in the configuration');
  }
  await app.listen(port);
}
bootstrap();
