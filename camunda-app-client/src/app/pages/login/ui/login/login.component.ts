import { Component, inject } from '@angular/core';
import Keycloak from 'keycloak-js';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private keycloak = inject(Keycloak);

  constructor() {}

  protected async login(): Promise<void> {
    try {
      await this.keycloak.login();
    } catch (error) {
      console.error(error);
    }
  }
}
