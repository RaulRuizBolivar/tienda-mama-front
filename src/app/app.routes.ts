import { Routes } from '@angular/router';
import { InitialSwitcherComponent } from './initial-switcher/initial-switcher.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';

export const routes: Routes = [
  { path: '', component: InitialSwitcherComponent },
  { path: 'amigurumis', component: ProductListComponent },
  { path: 'amigurumis/:id', component: ProductDetailComponent },
  { path: 'pirograbados', component: ProductListComponent },
  { path: 'pirograbados/:id', component: ProductDetailComponent },
  { path: 'macrame', component: ProductListComponent },
  { path: 'macrame/:id', component: ProductDetailComponent },
];
