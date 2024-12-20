import { Routes } from '@angular/router';
import { ProductDetailComponent } from './modules/product/detail/detail.component';
import { ProductListComponent } from './modules/product/list/list.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },  // Route pour la page d'accueil
  { path: 'products', component: ProductDetailComponent },
  { path: 'products/:id', component: ProductListComponent },
  { path: '**', redirectTo: 'products' }
];

