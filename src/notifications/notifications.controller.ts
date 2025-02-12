// src/notifications/notifications.controller.ts
import { Body, Controller, Post } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/create-notification.dto';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post('schedule')
  async scheduleNotification(
    @Body() createNotificationDto: CreateNotificationDto,
  ) {
    return await this.notificationsService.scheduleNotification(
      createNotificationDto,
    );
  }
}
