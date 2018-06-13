import { TestBed, inject } from '@angular/core/testing';

import { InMemoryService } from './in-memory.service';

describe('InMemoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryService]
    });
  });

  it('should be created', inject([InMemoryService], (service: InMemoryService) => {
    expect(service).toBeTruthy();
  }));
});
