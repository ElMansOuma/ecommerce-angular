import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Importation pour rediriger après connexion
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = ''; // Pour gérer les erreurs de connexion

  constructor(private authService: AuthService, private router: Router) { } // Injection de AuthService et Router

  onSubmit() {
    const isLoggedIn = this.authService.login(this.email, this.password);

    if (isLoggedIn) {
      console.log('Connexion réussie :', this.email);
      // Redirection vers une page protégée (par exemple : dashboard)
      this.router.navigate(['/profile']);
    } else {
      this.errorMessage = 'Email ou mot de passe incorrect';
      console.log(this.errorMessage);
    }
  }
}
