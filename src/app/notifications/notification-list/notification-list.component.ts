import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'src/app/_services/notifications.service';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css'],
})
export class NotificationListComponent implements OnInit {
  constructor(private notificationsService: NotificationsService) {}

  ngOnInit(): void {}
}
