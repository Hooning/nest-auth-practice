import { Test } from '@nestjs/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = moduleRef.get<AppService>(AppService);
  });

  describe('getData', () => {
    it('should return "Welcome to nest-auth-practice!"', () => {
      expect(service.getData()).toEqual({
        message: 'Welcome to nest-auth-practice!',
      });
    });
  });
});
