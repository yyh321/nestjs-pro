import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';

// 3001是客户端连接的端口号，默认跟服务端端口号相同
@WebSocketGateway(3001, { namespace: 'app' })
export class AppGateway implements OnGatewayConnection, OnGatewayDisconnect {
  handleConnection(client: Socket, ...args: any[]) {
    console.log('Client connected.');
  }
  handleDisconnect(client: Socket) {
    console.log('Client disconnected');
  }
  @SubscribeMessage('events')
  handleEvent(@MessageBody() data: string) {
    return 'Server: got it!';
  }
  @SubscribeMessage('message')
  handleMessage(
    @MessageBody() data: string,
    @ConnectedSocket() client: Socket,
  ) {
    client.broadcast.emit('message', `${client.id}:${data}`);
    return data;
  }
}
