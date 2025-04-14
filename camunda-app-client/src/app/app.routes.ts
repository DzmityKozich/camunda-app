import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login';
import { authGuard } from 'share/guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    loadComponent: () =>
      import('./pages/layout').then((m) => m.LayoutComponent),
    canActivate: [authGuard],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/process-definition-list').then(
            (m) => m.ProcessDefinitionListComponent
          ),
      },
    ],
  },
];
