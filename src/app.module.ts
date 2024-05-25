import { Module } from '@nestjs/common';
import { AccunetsModule } from './accunets/accunets.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [ ConfigModule.forRoot() , MongooseModule.forRoot(`${process.env.MONGO_URI}`)  , AccunetsModule],
})
export class AppModule {}
