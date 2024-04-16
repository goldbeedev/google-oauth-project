import { Injectable } from '@nestjs/common';
import { google } from 'googleapis';
import { readTokenFromFile } from './utilities/readToken';

@Injectable()
export class DriveService {
async listFiles(): Promise<any> {

    const oauth2Client = new google.auth.OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      process.env.CALLBACK_URL
    );

    oauth2Client.setCredentials({
      access_token:  readTokenFromFile()
    });

    const drive = google.drive({ version: 'v3', auth: oauth2Client });

    try {
      const response = await drive.files.list({
        pageSize: 10,
        fields: 'nextPageToken, files(id, name, mimeType, createdTime, modifiedTime, webViewLink)',
      });
      
      const files = response.data.files;
      console.log(files, 'files')
      return files;
    } catch (error) {
      console.error('Error listing files:', error);
      throw new Error('Error listing files');
    }
  }
}
