import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type UserDocument = user & Document;

@Schema({}) // Add empty object as argument to @Schema decorator
export class user {
   
   @Prop({ required: true })
   name: string;
   @Prop({ required: true })
   email: string;

   @Prop({ required: true })
   password: string;

   @Prop({ default: Date.now })
   timestamps: Date;
   
}

export const UserSchema = SchemaFactory.createForClass(user);