import { Booking, BookingSchema } from './schemas/booking.schema';
import { AuthModule } from 'src/auth/auth.module';
import { RidesModule } from 'src/rides/rides.module';
import { SeatsModule } from 'src/seats/seats.module';
import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CoreModule } from 'src/core/core.module';

@Module({
  imports: [
    SeatsModule,
    RidesModule,
    AuthModule,
    CoreModule,
    MongooseModule.forFeature([{ name: Booking.name, schema: BookingSchema }]),
  ],
  providers: [BookingService],
  controllers: [BookingController],
})
export class BookingModule {}
