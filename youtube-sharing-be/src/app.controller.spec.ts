import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Youtube Sharing Backend, copyright by @Vincent"', () => {
      expect(appController.getHomePage()).toBe(
        'Youtube Sharing Backend, copyright by @Vincent',
      );
    });
  });
});
