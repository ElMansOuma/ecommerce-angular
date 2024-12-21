import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './modules/product/detail/detail.component';
import { ProductListComponent } from './modules/product/list/list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './modules/user/login/login.component';
import { RegisterComponent } from './modules/user/register/register.component';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },  // Route pour la page d'accueil
  { path: 'products', component: ProductDetailComponent },
  { path: 'products/:id', component: ProductListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'edit-profile', component: EditProfileComponent },

  { path: '**', redirectTo: '' },  // Redirige vers la page d'accueil pour toute route non définie
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
