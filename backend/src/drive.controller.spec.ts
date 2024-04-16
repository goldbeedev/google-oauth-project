import { Test, TestingModule } from '@nestjs/testing';
import { DriveController } from './drive.controller';
import { DriveService } from './drive.service';

describe('DriveController', () => {
  let controller: DriveController;
  let driveService: DriveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DriveController],
      providers: [DriveService],
    }).compile();

    controller = module.get<DriveController>(DriveController);
    driveService = module.get<DriveService>(DriveService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('listFiles', () => {
    it('should return files', async () => {
      const files = [{
        mimeType: 'application/vnd.google-apps.spreadsheet',
        webViewLink: 'google.com',
        id: '1',
        name: 'Test File 1',
        createdTime: '2023-06-13T17:31:16.088Z',
        modifiedTime: '2023-06-16T04:10:25.206Z'
      },
      {
        mimeType: 'text/csv',
        webViewLink: 'google.com',
        id: '2',
        name: 'Test File 2',
        createdTime: '2023-06-09T22:18:55.046Z',
        modifiedTime: '2023-06-09T22:18:55.046Z'
      }];
      jest.spyOn(driveService, 'listFiles').mockResolvedValue(files);

      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await controller.listFiles(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ files });
    });

    it('should handle error', async () => {
      jest.spyOn(driveService, 'listFiles').mockRejectedValue(new Error('Error'));

      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await controller.listFiles(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: 'Error listing files' });
    });
  });
});