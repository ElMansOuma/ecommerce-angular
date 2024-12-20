import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule  // Ajout de FormsModule pour ngModel
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class registerComponent {
  // Ajout de la propriété name
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  onSubmit() {
    if (this.password === this.confirmPassword) {
      console.log('Name:', this.name);   // Afficher le nom
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      // Ajoutez la logique d'envoi des données au serveur ici
    } else {
      console.log('Les mots de passe ne correspondent pas');
    }
  }
}
