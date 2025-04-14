import {
  ApplicationConfig,
  inject,
  PLATFORM_ID,
  provideAppInitializer,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import {
  provideKeycloakAngular,
  includeBearerTokenInterceptor,
  provideBearerTokenInterceptorConfig,
  initKeycloak,
} from './keycloak-provider';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(
      withFetch(),
      withInterceptors([includeBearerTokenInterceptor])
    ),
    provideBearerTokenInterceptorConfig(),
    provideKeycloakAngular(),
    provideAppInitializer(async () => {
      return await initKeycloak();
    }),
  ],
};
