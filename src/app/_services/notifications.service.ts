import { Injectable } from '@angular/core';
import { scan, Subject } from 'rxjs';

export interface Command {
  id: string;
  text?: string;
  type: 'success' | 'error' | 'clear';
}
@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  private messages = new Subject<Command>(); //next
  messages$ = this.messages.asObservable().pipe(
    scan((messages: Command[], command: Command) => {
      if (command.type === 'clear') {
        return messages.filter((message) => message.id !== command.id);
      } else {
        return [...messages, command];
      }
    }, [])
  ); //subscribe

  constructor() {}

  addMessage(message: string) {
    const id = this.randomId();
    this.messages.next({
      id: id,
      type: 'success',
      text: message,
    });
    setTimeout(() => this.clearMessage(id), 5000);
  }
  errorMessage(message: string) {
    const id = this.randomId();
    this.messages.next({
      id: id,
      type: 'error',
      text: message,
    });
    setTimeout(() => this.clearMessage(id), 5000);
  }
  private clearMessage(id: string) {
    this.messages.next({
      id: id,
      type: 'clear',
    });
  }

  private randomId() {
    return Math.random().toString(10);
  }
}
