import { Module } from '@nestjs/common';
import { AccunetsController } from './accunets.controller';
import { AccunetsService } from './accunets.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema, user } from 'src/models/user.schema';

@Module({
  imports : [MongooseModule.forFeature([{ name: user.name, schema: UserSchema }])],
  controllers: [AccunetsController],
  providers: [AccunetsService]
})
export class AccunetsModule {}
