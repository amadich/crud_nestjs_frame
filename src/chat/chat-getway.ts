
import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway(3001, {})
export class ChatGatway {

   @WebSocketServer() server;
   handleConnection(client : Socket) {
      console.log('client connected' , client.id);

      this.server.emit('newMessage', 'Hello from server');

   }

   handleDisconnect(client : Socket) {
      console.log('client disconnected' , client.id);
   }

   @SubscribeMessage('newMessage')
   handleMessage(@MessageBody() msg: any): string {
      return msg;
   }

}