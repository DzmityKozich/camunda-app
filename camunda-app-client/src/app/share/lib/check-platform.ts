import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';

export const isBrowser = (): boolean => {
  const platform = inject(PLATFORM_ID);
  return isPlatformBrowser(platform);
};

export const isServer = (): boolean => {
  return !isBrowser();
};
