import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from '../services/data.service'; // Importation du service DataService

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  imagePath = 'homm.png.png'; // Correction du chemin de l'image
  products: any[] = []; // Liste des produits, initialement vide

  constructor(private dataService: DataService) { } // Injection du service

  ngOnInit(): void {
    // Récupération des produits à partir de DataService
    this.dataService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
