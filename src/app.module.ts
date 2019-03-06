import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesController } from './messages/messages.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageService } from './services/message/message.service';
import { Message } from './messages/message/message.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([Message])
  ],
  controllers: [AppController, MessagesController],
  providers: [AppService, MessageService],
  exports:[
    MessageService
  ]
})
export class AppModule {}
