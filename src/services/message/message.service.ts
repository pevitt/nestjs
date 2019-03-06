import { Injectable } from '@nestjs/common';
import { Message } from 'src/messages/message/message.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MessageService {
    constructor(
        @InjectRepository(Message)
        private readonly messageRepository: Repository<Message>,
    ) {}

    async getAll(): Promise<Message[]>{
        return await this.messageRepository.find();
    }

    async createMessage(createMessage:Message):Promise<Message>{
        const newMessage = new Message();
        newMessage.message = createMessage.message;
        newMessage.nick = createMessage.nick;
        
        
        return this.messageRepository.save(newMessage);
    }

    async updateMessage(id:number, createMessage:Message):Promise<Message>{
        const newMessage = await this.messageRepository.findOne(id);
        newMessage.message = createMessage.message;
        newMessage.nick = createMessage.nick;
        
        
        return this.messageRepository.save(newMessage);
    }

    async deleteMessage(id:number):Promise<any>{
        
        return await this.messageRepository.delete(id);
    }

}
