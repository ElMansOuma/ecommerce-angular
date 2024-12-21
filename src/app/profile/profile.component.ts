import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: any = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.user = this.authService.getCurrentUser(); // Récupérer l'utilisateur connecté
    if (!this.user) {
      this.router.navigate(['/login']); // Rediriger vers la page de login si aucun utilisateur n'est connecté
    }
  }

  // Fonction pour déconnecter l'utilisateur
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  // Fonction d'édition du profil (Redirige vers une page d'édition)
  editProfile() {
    this.router.navigate(['/edit-profile']);
  }

}
