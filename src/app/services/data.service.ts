import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // Liste de produits simulée
  private products = [
    { name: 'Product 1', price: 49.99, image: 'product4.png' },
    { name: 'Product 2', price: 79.99, image: 'product2.png' },
    { name: 'Product 3', price: 99.99, image: 'product3.png' },
  ];

  // Méthode pour récupérer les produits
  getProducts(): Observable<any[]> {
    return of(this.products);
  }
}
