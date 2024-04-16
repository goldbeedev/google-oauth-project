import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth.module';
import { AuthController } from './auth.controller';
import { DriveController } from './drive.controller';
import { DriveService } from './drive.service';

@Module({
  imports: [AuthModule],
  controllers: [AppController, AuthController, DriveController],
  providers: [AppService, DriveService],
})
export class AppModule {}
