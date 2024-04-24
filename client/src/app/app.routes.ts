import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  // {
  //   pathMatch: 'full', //(property) Route.pathMatch?: "full" | "prefix" | undefined

  //   path: '',
  //   redirectTo: '/first',
  // },
  {
    path: '',
    component: AppComponent,
  },
];
