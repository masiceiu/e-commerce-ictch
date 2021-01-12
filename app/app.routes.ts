
import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: 'products/:id',
    component: DetailComponent,
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent,
  }
];