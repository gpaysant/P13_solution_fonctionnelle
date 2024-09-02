import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

export interface ChatSession {
  id: number;
  serviceClientId: number;
  senderId: number;
  message: string;
  heureMessage: Date;
}

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private apiUrl = `${environment.apiUrl}/api/chats`;

  constructor(private http: HttpClient) {}

  getAllChats(): Observable<ChatSession[]> {
    return this.http.get<ChatSession[]>(this.apiUrl);
  }

  saveChat(chat: ChatSession): Observable<ChatSession> {
    return this.http.post<ChatSession>(this.apiUrl, chat);
  }
}
