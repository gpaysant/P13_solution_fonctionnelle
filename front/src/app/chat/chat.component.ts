import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatService } from '../chat.service';
import { ChatSession } from '../models/chat-session.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  messages: ChatSession[] = [];
  newMessage: string = '';
  userId!: number;

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.chatService.connect((message: ChatSession) => {
      this.messages.push(message);
    });

    this.chatService.getMessages().subscribe((message: ChatSession)=> {
      this.messages.push(message);
    });

    this.userId = parseInt(sessionStorage.getItem('userId') || '0', 10);
  }

  sendMessage(): void {
    const chatMessage: ChatSession = {
      senderId: this.userId,
      message: this.newMessage,
      heureMessage: new Date(),
      id: null,
      serviceClientId: 1
    };
    this.chatService.sendMessage(chatMessage);
    this.newMessage = '';
  }
}
