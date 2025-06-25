import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { LucideAngularModule } from 'lucide-angular';
import { routes } from './app.routes';
import iconLibrary from './data/icon-library';
import { appStoreReducers, metaReducers } from './app.store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    provideAnimations(),
    importProvidersFrom(
      LucideAngularModule.pick({
        ...iconLibrary,
      })
    ),
    [provideStore(appStoreReducers, { metaReducers })],
  ],
};
