import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { DriveService } from './drive.service';

@Controller('drive')
export class DriveController {
  constructor(private readonly driveService: DriveService) {}
  @Get()
  async listFiles(@Req() req, @Res() res) {
    try {
      const files = await this.driveService.listFiles();
      res.status(200).json({ files });
    } catch (error) {
      res.status(500).json({ error: 'Error listing files' });
    }
  }
}