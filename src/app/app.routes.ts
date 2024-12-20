import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './modules/product/detail/detail.component';
import { ProductListComponent } from './modules/product/list/list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './modules/user/login/login.component';
import { registerComponent } from './modules/user/register/register.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: HomeComponent },  // Route pour la page d'accueil
  { path: 'products', component: ProductDetailComponent },
  { path: 'products/:id', component: ProductListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: registerComponent },
  { path: '**', redirectTo: '' },  // Redirige vers la page d'accueil pour toute route non définie
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
