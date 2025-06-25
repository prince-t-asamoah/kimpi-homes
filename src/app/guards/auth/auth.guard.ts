import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectIsAuthenticated } from '../../features/auth/auth.store.reducers';

export const authGuard: CanActivateFn = async () => {
  const store = inject(Store);
  const router = inject(Router);
  const isAuthenticated$ = store.select(selectIsAuthenticated);
  const isAuthenticated = await firstValueFrom(isAuthenticated$);

  if (!isAuthenticated) {
    return router.createUrlTree(['/login']);
  }
  return true;
};
