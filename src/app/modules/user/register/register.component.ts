import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  message: string = ''; // Message à afficher après l'inscription

  constructor(private authService: AuthService) { }

  onSubmit() {
    if (this.password === this.confirmPassword) {
      const success = this.authService.register(this.email, this.password);
      if (success) {
        this.message = 'Inscription réussie !';
      } else {
        this.message = 'L\'utilisateur existe déjà.';
      }
    } else {
      this.message = 'Les mots de passe ne correspondent pas';
    }
  }
}