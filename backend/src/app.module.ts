import { Module } from '@nestjs/common';
import { AuthModule } from './auth.module';
import { AuthController } from './auth.controller';
import { DriveController } from './drive.controller';
import { DriveService } from './drive.service';

@Module({
  imports: [AuthModule],
  controllers: [AuthController, DriveController],
  providers: [DriveService],
})
export class AppModule {}
