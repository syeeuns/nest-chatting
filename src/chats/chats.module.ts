import { SocketSchema } from './models/sockets.model';
import ChatsGateway from './chats.gateway';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Chatting, ChattingSchema } from './models/chattings.model';
import { Socket } from './models/sockets.model';

@Module({
  imports: [
    MongooseModule.forFeature([
        {name: Chatting.name, schema: ChattingSchema,},
        {name: Socket.name, schema: SocketSchema,}
    ]),

  ],
  providers: [ChatsGateway],
})
export class ChatsModule {}
