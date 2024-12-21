import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: any[] = [];

  constructor() {
    // Charger les utilisateurs depuis le localStorage
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }
  }

  // Méthode de connexion
  login(email: string, password: string): boolean {
    const user = this.users.find((u) => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user)); // Sauvegarde de l'utilisateur connecté
      console.log('Connexion réussie pour:', email);
      return true;
    } else {
      console.log('Échec de la connexion');
      return false;
    }
  }

  // Méthode d'inscription
  register(email: string, password: string): boolean {
    const userExists = this.users.some((u) => u.email === email);
    if (userExists) {
      console.log('Cet utilisateur existe déjà');
      return false;
    }

    this.users.push({ email, password, name: email.split('@')[0] }); // Utilisation du nom comme partie avant l'email
    localStorage.setItem('users', JSON.stringify(this.users));
    console.log('Utilisateur enregistré avec succès :', email);
    return true;
  }

  // Méthode pour obtenir l'utilisateur connecté
  getCurrentUser() {
    const currentUser = localStorage.getItem('currentUser');
    return currentUser ? JSON.parse(currentUser) : null;
  }

  // Méthode de déconnexion
  logout() {
    localStorage.removeItem('currentUser');
    console.log('Utilisateur déconnecté');
  }
}
