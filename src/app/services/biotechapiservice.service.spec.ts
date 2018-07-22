import { TestBed, inject } from '@angular/core/testing';

import { BiotechapiService } from './biotechapiservice.service';

describe('BiotechapiserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BiotechapiService]
    });
  });

  it('should be created', inject([BiotechapiService], (service: BiotechapiService) => {
    expect(service).toBeTruthy();
  }));
});
