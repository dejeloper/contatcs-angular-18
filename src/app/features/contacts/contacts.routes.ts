import { Routes } from '@angular/router';

const contactsRoute: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./list/list.component').then((c) => c.ListComponent),
  },
];

export default contactsRoute;
