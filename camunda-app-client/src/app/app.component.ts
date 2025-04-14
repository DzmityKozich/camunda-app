import { AfterViewInit, Component, inject, Injector } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Keycloak from 'keycloak-js';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  title = 'camunda-app-client';

  keycloakSignal = inject(Keycloak);

  ngAfterViewInit(): void {
    // console.log(this.keycloakSignal);
  }
}
