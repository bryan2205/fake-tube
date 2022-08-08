import { TestBed } from '@angular/core/testing';

import { FakeTubeService } from './fake-tube.service';

describe('FakeTubeService', () => {
  let service: FakeTubeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeTubeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
