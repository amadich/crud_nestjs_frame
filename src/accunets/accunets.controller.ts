import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AccunetsService } from './accunets.service';
import { CreateUserDto } from 'src/dto/users.dto';

@Controller('accunets')
export class AccunetsController {
   constructor(private readonly userService : AccunetsService) {}

   @Get()
   async getAccunets() {
      return await this.userService.getAccunets();
   }

   @Get("findone/:id")
   async getUser(@Param("id") id : string) {
      return await this.userService.getUser(id);
   }

   @Post("createuser")
   async createUser(@Body() body : CreateUserDto) {
      return await this.userService.createUser(body);
   }

}
