import * as Keycloak from 'keycloak-connect';

const kcConfig: Keycloak.KeycloakConfig = {
  'auth-server-url': process.env.KEYCLOAK_AUTH_SERVER_URL!,
  'confidential-port': process.env.KEYCLOAK_CONFIDENTIAL_PORT!,
  'ssl-required': process.env.KEYCLOAK_SSL_REQUIRED!,
  realm: process.env.KEYCLOAK_REALM!,
  resource: process.env.KEYCLOAK_RESOURCE!,
  'bearer-only': true,
};

export const keycloak = new Keycloak({}, kcConfig);
export const kcMiddleware = keycloak.middleware();
