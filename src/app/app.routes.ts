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
  {
    path: 'table',
    loadComponent: () =>
      import('../app/components/table/table').then((c) => c.Table),
  },
  {
    path: 'inputmask',
    loadComponent: () =>
      import('../app/components/input-mask/parentinput/parentinput').then(
        (c) => c.Parentinput
      ),
  },
  {
    path: 'datePicker',
    loadComponent: () =>
      import(
        '../app/components/datepicker/display-datepicker/display-datepicker'
      ).then((c) => c.DisplayDatepicker),
  },
  {
    path: 'data-server',
    loadComponent: () =>
      import('../app/components/data-search/data-search').then(
        (c) => c.DataSearch
      ),
  },
];
