import { Module } from '@nestjs/common';
import { ChatGatway } from './chat-getway';

@Module({
   imports: [ChatGatway],
})
export class ChatModule {}
 