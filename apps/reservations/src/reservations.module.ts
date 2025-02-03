import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import { DatabaseModule, LoggerModule } from '@app/common';
import { ReservationsRepository } from './reservations.repository';
import * as Joi from 'joi';
import {
  ReservationDocument,
  ReservationsSchema,
} from './models/reservation.schema';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: ReservationDocument.name, schema: ReservationsSchema },
    ]),
    LoggerModule,
    ConfigModule.forRoot({
      isGlobal: true,
      /* envFilePath: [
        'apps/reservations/.env', // Local .env file for the reservations app
      ], */ // Make sure this path is correct
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
    }),
  ],
  controllers: [ReservationsController],
  providers: [ReservationsService, ReservationsRepository],
})
export class ReservationsModule {}
