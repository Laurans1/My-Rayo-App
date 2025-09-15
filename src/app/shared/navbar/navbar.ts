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

  
   // Detecta clicks fuera del menú para cerrarlo automáticamente
   
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const target = event.target as HTMLElement;

    // Si el click fue dentro del nav o del menú lateral → no cerrar
    if (target.closest('nav') || target.closest('.menu-lateral')) {
      return;
    }

    // Si el click fue fuera → cerrar menú
    this.menuOpen = false;
  }

  
    //Alterna el menú lateral izquierdo
  
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
