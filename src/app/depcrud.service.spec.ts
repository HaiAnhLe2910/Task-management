import { TestBed, inject } from '@angular/core/testing';

import { DepcrudService } from './depcrud.service';

describe('DepcrudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DepcrudService]
    });
  });

  it('should be created', inject([DepcrudService], (service: DepcrudService) => {
    expect(service).toBeTruthy();
  }));
});
