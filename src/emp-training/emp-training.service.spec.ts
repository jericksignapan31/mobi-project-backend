import { Test, TestingModule } from '@nestjs/testing';
import { EmpTrainingService } from './emp-training.service';

describe('EmpTrainingService', () => {
  let service: EmpTrainingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmpTrainingService],
    }).compile();

    service = module.get<EmpTrainingService>(EmpTrainingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
