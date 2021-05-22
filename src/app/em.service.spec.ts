import { TestBed, inject } from '@angular/core/testing';

import { EmService } from './em.service';

describe('EmService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmService]
    });
  });

  it('should be created', inject([EmService], (service: EmService) => {
    expect(service).toBeTruthy();
  }));
});
