import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // Example image for the Hero section
  imagePath = '/homm.png.png'; // Remarquez l'absence de 'assets/'

  // List of products with images
  products = [
    {
      name: 'Product 1',
      price: 49.99,
      image: 'product4.png' // Corrected path to assets folder
    },
    {
      name: 'Product 2',
      price: 79.99,
      image: 'product2.png' // Corrected path to assets folder
    },
    {
      name: 'Product 3',
      price: 99.99,
      image: 'product3.png' // Corrected path to assets folder
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}