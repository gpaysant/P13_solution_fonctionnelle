import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {Stomp} from "@stomp/stompjs";
import SockJS from "sockjs-client";
import { ChatSession } from './models/chat-session.model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private stompClient: any;
  private messageSubject = new Subject<any>();

  constructor() {
  }

  connect(callback: (message: ChatSession) => void): void {
    const serverUrl = `${environment.apiUrl}/ws`;
    const ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(ws);

    this.stompClient.connect({}, () => {
      this.stompClient.subscribe('/topic/messages', (message: ChatSession) => {
        this.onMessageReceived(message);
      });
    }, (error: string) => {
      console.error('Error during connection:', error);
    });
  }

  protected onMessageReceived(message: any): void {
    this.messageSubject.next(JSON.parse(message.body));
  }

  sendMessage(message: any) {
    this.stompClient.send('/app/sendMessage', {}, JSON.stringify(message));
  }

  public getMessages() {
    return this.messageSubject.asObservable();
  }
}
