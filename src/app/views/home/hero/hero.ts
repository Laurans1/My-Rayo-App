import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // trae *ngIf, *ngFor si los necesitaras

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],         
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class Hero {
  // Lista de imágenes del carrusel 
images = [
    '/images/hero1.png',
    '/images/hero2.png'
];


  currentIndex = 0;

  constructor() {
    // automática: cambiar imagen cada 5 segundos (5000 ms)
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 5000);
  }

  // funciones para las flechas (navegación manual)
  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}
