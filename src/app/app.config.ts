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
import { LucideAngularModule } from 'lucide-angular';
import { routes } from './app.routes';
import iconLibrary from './data/icon-library';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    importProvidersFrom(
      LucideAngularModule.pick({
        ...iconLibrary,
      })
    ),
  ],
};
