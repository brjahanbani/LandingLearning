import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Command,
  NotificationsService,
} from 'src/app/_services/notifications.service';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css'],
})
export class NotificationListComponent implements OnInit {
  messages!: Observable<Command[]>;
  constructor(private notificationsService: NotificationsService) {
    this.messages = this.notificationsService.messages$;

    setInterval(() => {
      this.notificationsService.addMessage('This is a Test Message');
    }, 2000);
  }

  ngOnInit(): void {}
}
