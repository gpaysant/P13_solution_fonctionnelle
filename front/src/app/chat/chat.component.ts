// src/app/components/chat/chat.component.ts
import { Component, OnInit } from '@angular/core';
import { ChatService, ChatSession } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  userId?: number;
  userType?: string;
  chatSessions: ChatSession[] = [];
  newMessage: string = '';

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.userId = Number(sessionStorage.getItem('userId'));
    this.userType = sessionStorage.getItem('userType') || '';
    this.loadChats();
  }

  loadChats() {
    this.chatService.getAllChats().subscribe((data: ChatSession[]) => {
      this.chatSessions = data;//.filter(chat => chat.senderId === this.userId);
    });
  }

  sendMessage() {
    if (this.newMessage.trim() && this.userId) {
      const newChatSession: ChatSession = {
        id: 0, // sera généré par le backend
        serviceClientId: 1, // remplacez par l'ID du service client actuel
        senderId: this.userId,
        message: this.newMessage,
        heureMessage: new Date(),
      };
      this.chatService.saveChat(newChatSession).subscribe((chat) => {
        this.chatSessions.push(chat);
        this.newMessage = '';
      });
    }
  }
}
