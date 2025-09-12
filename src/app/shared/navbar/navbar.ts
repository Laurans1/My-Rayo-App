import { Component, HostListener } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
  // Estado del menú lateral izquierdo ("Menú")
  menuOpen = false;

  // Estado del panel derecho "Items"
  itemsOpen = false;

  // Detectar clicks en el documento
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const target = event.target as HTMLElement;

    // Si se hace click en botones o dentro de los menús, no cerrar
    if (
      target.closest('nav') ||
      target.closest('.menu-lateral') ||
      target.closest('.menu-items')
    ) {
      return;
    }

    // Cerrar ambos menús si el click fue fuera
    this.menuOpen = false;
    this.itemsOpen = false;
  }

  // Alternar menú lateral izquierdo
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    if (this.menuOpen) this.itemsOpen = false;
  }

  // Alternar panel derecho Items
  toggleItems() {
    this.itemsOpen = !this.itemsOpen;
    if (this.itemsOpen) this.menuOpen = false;
  }
}
