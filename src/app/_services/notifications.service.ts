import { Injectable } from '@angular/core';
import { scan, Subject } from 'rxjs';

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
    this.messages = new Subject<Command>();
  }

  getMessages() {
    return this.messages.pipe(
      scan((messages: Command[], command: Command) => {
        if (command.type === 'clear') {
          return messages.filter((message) => message.id !== command.id);
        } else {
          return [...messages, command];
        }
      }, [])
    );
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
