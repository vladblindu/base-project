import { Module } from "@nestjs/common";
import { NotificationService } from "./notification.service";
import { NotificationController } from "./notification.controller";
import { MailerModule } from "@nestjs-modules/mailer";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { notificationConfig } from "./notification.config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { NotificationRepository } from "./notification.repository";
import { PassportModule } from "@nestjs/passport";
import { UserModule } from "../user/user.module";

@Module({
  imports: [
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: notificationConfig,
      inject: [ConfigService]
    }),
    TypeOrmModule.forFeature([
      NotificationRepository
    ]),
    PassportModule.register({ defaultStrategy: "jwt" }),
    UserModule
  ],
  controllers: [NotificationController],
  providers: [NotificationService],
  exports: [NotificationService]
})
export class NotificationModule {
}
