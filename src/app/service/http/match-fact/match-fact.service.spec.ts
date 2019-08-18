import { TestBed, inject } from '@angular/core/testing';

import { MatchFactService } from './match-fact.service';

describe('MatchFactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatchFactService]
    });
  });

  it('should ...', inject([MatchFactService], (service: MatchFactService) => {
    expect(service).toBeTruthy();
  }));
});
