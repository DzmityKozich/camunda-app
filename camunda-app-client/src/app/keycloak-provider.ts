import { inject, PLATFORM_ID } from '@angular/core';
import {
  provideKeycloak,
  createInterceptorCondition,
  IncludeBearerTokenCondition,
  INCLUDE_BEARER_TOKEN_INTERCEPTOR_CONFIG,
} from 'keycloak-angular';
import { isPlatformBrowser } from '@angular/common';
import Keycloak, { KeycloakInitOptions } from 'keycloak-js';
import { environment } from '../environments/environment';

export const provideKeycloakAngular = () =>
  provideKeycloak({
    config: {
      clientId: environment.KEYCLOAK_RESOURCE,
      realm: environment.KEYCLOAK_REALM,
      url: environment.KEYCLOAK_AUTH_SERVER_URL,
    },
  });

const urlCondition = createInterceptorCondition<IncludeBearerTokenCondition>({
  urlPattern: /^(http:\/\/localhost:3000)(\/.*)?$/i,
  bearerPrefix: 'Bearer',
});

export const provideBearerTokenInterceptorConfig = () => ({
  provide: INCLUDE_BEARER_TOKEN_INTERCEPTOR_CONFIG,
  useValue: [urlCondition],
});

const getKcInitConfig = (): KeycloakInitOptions => ({
  onLoad: 'check-sso',
  silentCheckSsoRedirectUri: `${window.location.origin}/assets/silent-check-sso.html`,
  redirectUri: `${window.location.origin}/`,
});

export const initKeycloak = async (): Promise<void> => {
  const platform = inject(PLATFORM_ID);

  if (isPlatformBrowser(platform)) {
    return new Promise<any>((resolve) => {
      const keycloak = inject(Keycloak);
      keycloak
        .init(getKcInitConfig())
        .then(resolve)
        .catch((err) => {
          console.error(err);
          resolve(false);
        });
    });
  } else {
    return Promise.resolve();
  }
};

export { includeBearerTokenInterceptor } from 'keycloak-angular';
