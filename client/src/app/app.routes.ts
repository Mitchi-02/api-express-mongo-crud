import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    pathMatch: 'full', //(property) Route.pathMatch?: "full" | "prefix" | undefined

    path: '',
    redirectTo: '/first',
  },
  {
    path: 'first',
    component: FirstComponent,
  },
  {
    component: SecondComponent,
    path: 'second',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
