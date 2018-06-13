import { TestBed, inject } from '@angular/core/testing';

import { RoomServiceService } from './room-service.service';

describe('RoomServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoomServiceService]
    });
  });

  it('should be created', inject([RoomServiceService], (service: RoomServiceService) => {
    expect(service).toBeTruthy();
  }));
});
