import { Controller, Post, Body, Get, Put, Delete, Res, HttpStatus, Param } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message-dto';
import { Message } from './message/message.entity';
import { MessageService } from 'src/services/message/message.service';

@Controller('messages')
export class MessagesController {

    constructor(private messageService:MessageService){

    }

    @Post()
    create(@Body() createMessageDto:Message, @Res() response) {
        console.log(createMessageDto);
        this.messageService.createMessage(createMessageDto).then( message => {
            response.status(HttpStatus.CREATED).json(message);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({'mensaje':'error'});
        });

    }

    @Get()
    getAll(@Res() response){
        this.messageService.getAll().then( messages => {
            response.status(HttpStatus.OK).json(messages);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({'mensaje':'error'});
        });
    }

    @Put(':id')
    update(@Body() updateMessageDto:Message,@Res() response, @Param('id') id){
        this.messageService.updateMessage(id,updateMessageDto).then( message => {
            response.status(HttpStatus.OK).json(message);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({'mensaje':'error'});
        });
    }

    @Delete(':id')
    remove(@Res() response, @Param('id') id) {
        this.messageService.deleteMessage(id).then( message => {
            response.status(HttpStatus.OK).json(message);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({'mensaje':'error'});
        });
    }

}
