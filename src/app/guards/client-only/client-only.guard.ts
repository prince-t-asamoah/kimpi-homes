import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanMatchFn } from '@angular/router';

export const clientOnlyGuard: CanMatchFn = () => {
  const platformId = inject(PLATFORM_ID);
  return isPlatformBrowser(platformId);
};
