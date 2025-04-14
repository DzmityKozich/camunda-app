import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthGuardData, createAuthGuard } from 'keycloak-angular';
import { isBrowser } from 'share/lib';

const isAuthenticated = async (
  route: ActivatedRouteSnapshot,
  _: RouterStateSnapshot,
  authData: AuthGuardData
): Promise<boolean | UrlTree> => {
  const { authenticated, keycloak } = authData;

  if (authenticated) {
    return true;
  }

  if (keycloak && isBrowser()) {
    return keycloak.login().then(() => true);
  }

  return false;
};

export const authGuard = createAuthGuard<CanActivateFn>(isAuthenticated);
