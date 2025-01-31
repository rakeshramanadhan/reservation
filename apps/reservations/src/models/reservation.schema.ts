import { AbstractDocument } from '@app/common';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class ReservationDocument extends AbstractDocument {
  @Prop()
  timeStamp: Date;
  @Prop()
  startDate: Date;
  @Prop()
  endDate: Date;
  @Prop()
  userId: string;
  @Prop()
  placeId: string;
  @Prop()
  invoiceId: string;
}

export const ReservationsSchema =
  SchemaFactory.createForClass(ReservationDocument);
