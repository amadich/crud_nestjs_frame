import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/dto/users.dto';
import { UserDocument, user } from 'src/models/user.schema';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AccunetsService {
   constructor(@InjectModel(user.name) private userModel: Model<UserDocument>) {}
   async getAccunets() {
      return this.userModel.find();
   }

   async getUser( id : string ) {
      const user = await this.userModel.findById(id);
      return user;
   }

   async createUser( body : CreateUserDto ) {
      
      const createUser = new  this.userModel(body);
      createUser.save();
      const token = jwt.sign(body, `${process.env.secretKey}`);
      return {token};
      
   }

}
