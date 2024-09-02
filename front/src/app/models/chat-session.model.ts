export interface ChatSession {
    id: number | null;
    serviceClientId: number;
    senderId: number;
    message: string;
    heureMessage: Date;
  }
  