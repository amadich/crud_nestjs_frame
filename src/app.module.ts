import { Module } from '@nestjs/common';
import { AccunetsModule } from './accunets/accunets.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatModule } from './chat/chat.module';


@Module({
  imports: [ ConfigModule.forRoot() , MongooseModule.forRoot(`${process.env.MONGO_URI}`)  , AccunetsModule, ChatModule],
})
export class AppModule {}
 
