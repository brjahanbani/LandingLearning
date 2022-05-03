import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface Command {
  id: number;
  text?: string;
  type: 'success' | 'error' | 'clear';
}
@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  messages!: Subject<Command>;
  constructor() {
    this.messages = new Subject<any>();
  }

  addMessage(message: string) {
    this.messages.next({
      id: 1,
      type: 'success',
      text: message,
    });
  }
  errorMessage(message: string) {
    this.messages.next({
      id: 2,
      type: 'error',
      text: message,
    });
  }
  clearMessage(id: number) {
    this.messages.next({
      id: id,
      type: 'clear',
    });
  }
}
