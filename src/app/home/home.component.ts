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
  imagePath = 'assets/image1.png'; // Corrected path to assets folder

  // List of products with images
  products = [
    {
      name: 'Product 1',
      price: 49.99,
      image: 'assets/product1.png' // Corrected path to assets folder
    },
    {
      name: 'Product 2',
      price: 79.99,
      image: 'assets/product2.png' // Corrected path to assets folder
    },
    {
      name: 'Product 3',
      price: 99.99,
      image: 'assets/product3.png' // Corrected path to assets folder
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}