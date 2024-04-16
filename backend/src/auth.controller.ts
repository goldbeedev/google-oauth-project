import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { writeTokenToFile } from './utilities/writeToken'
@Controller('auth')
export class AuthController {
  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req, @Res() res) {
    writeTokenToFile(req.user.accessToken)
    // Redirect the user to the frontend drive url to call the drive files
    res.redirect('http://localhost:3000/drive');
  }
}