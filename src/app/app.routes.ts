import { Routes } from '@angular/router';
import { InitialSwitcherComponent } from './initial-switcher/initial-switcher.component';
import { ProductListComponent } from './product-list/product-list.component';

export const routes: Routes = [
  { path: '', component: InitialSwitcherComponent },
  { path: 'amigurumis', component: ProductListComponent },
  { path: 'pirograbados', component: ProductListComponent },
  { path: 'macrame', component: ProductListComponent },
];
