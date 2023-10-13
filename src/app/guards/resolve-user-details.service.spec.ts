import { TestBed } from '@angular/core/testing';

import { ResolveUserDetailsService } from './resolve-user-details.service';

describe('ResolveUserDetailsService', () => {
  let service: ResolveUserDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResolveUserDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
