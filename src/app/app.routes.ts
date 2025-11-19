import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./model-input/model-input').then((c) => c.ModelInput),
  },
  {
    path: 'dynamic_from',
    loadComponent: () =>
      import('../app/components/dynamic-form/dynamic-form').then(
        (c) => c.DynamicForm
      ),
  },
];
