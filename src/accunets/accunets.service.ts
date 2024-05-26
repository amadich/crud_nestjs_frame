import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto, SigninDto } from 'src/dto/users.dto';
import { UserDocument, user } from 'src/models/user.schema';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from "bcrypt";

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
      
      const hashpwd = bcrypt.hashSync(body.password, 10);
      body.password = hashpwd;
      const createUser = new  this.userModel(body);
      await createUser.save();
      const token = jwt.sign(body, `${process.env.secretKey}`);
      return {token};
      
   }

   async signin( body : SigninDto ) {
      const user = await this.userModel.findOne({email : body.email});
      if (user) {
         const match = bcrypt.compareSync(body.password, user.password);
         if (match) {
            const payload = {
               
                  id: user._id,
                  name: user.name,
                  email: user.email,
                  
               };
            const token = jwt.sign( payload , `${process.env.secretKey}`);
            return {token};
         } else {
            return { message: "Password is incorrect"};
         }
      } else {
         return { message: "User not found"};
      }

}

}
