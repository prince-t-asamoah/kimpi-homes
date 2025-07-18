import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';
import { clientOnlyGuard } from './client-only.guard';

describe('clientOnlyGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => clientOnlyGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
