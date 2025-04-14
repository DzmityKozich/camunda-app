import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Keycloak from 'keycloak-js';

@Component({
  selector: 'cca-layout',
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  private keycloak = inject(Keycloak);

  constructor() {}

  protected async logout(): Promise<void> {
    try {
      await this.keycloak.logout({
        redirectUri: `${window.location.origin}/login`,
      });
    } catch (error) {
      console.error(error);
    }
  }
}
