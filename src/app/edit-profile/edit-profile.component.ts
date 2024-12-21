import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  user: any = { name: '', email: '' }; // Par défaut, l'utilisateur est vide

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      const users = JSON.parse(storedUsers);
      this.user = users[0]; // Charger l'utilisateur (ici, on prend le premier utilisateur)
    } else {
      this.router.navigate(['/login']); // Si aucun utilisateur n'est connecté, rediriger vers la page de login
    }
  }

  // Sauvegarder les changements dans le profil
  saveProfile() {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      const users = JSON.parse(storedUsers);
      // Mettre à jour l'utilisateur dans le tableau
      users[0] = this.user;
      // Sauvegarder les utilisateurs modifiés dans le localStorage
      localStorage.setItem('users', JSON.stringify(users));
      console.log('Profil mis à jour:', this.user);
      this.router.navigate(['/profile']); // Rediriger vers la page de profil après la mise à jour
    }
  }
}
