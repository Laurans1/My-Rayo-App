import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonios.html',
  styleUrls: ['./testimonios.css']
})
export class Testimonios {
  // Datos de los 2 testimonios (modifica texto/nombres según me pases)
  testimonials = [
    {
      name: 'M.P.',
      role: 'Mensajero',
      title: '¡Tu propio plan financiero!',
      text: 'En RAYO te crean tu propio plan financiero, donde la empresa vela por tu propio crédito y te dan esos montos para asegurarte que los puedas pagar. Eso es velar por sus clientes! Gracias!',
      avatar: '/images/testimonial1.webp'
    },
    {
      name: 'D.R.',
      role: 'Cocinera',
      title: '¡Buena opción!',
      text: 'Es una buena opción para un apuro financiero, muy ágiles y la asesora muy atenta.',
      avatar: '/images/testimonial2.webp'
    }
  ];

  current = 0;

  // Mostrar anterior
  prev() {
    this.current = (this.current - 1 + this.testimonials.length) % this.testimonials.length;
  }

  // Mostrar siguiente
  next() {
    this.current = (this.current + 1) % this.testimonials.length;
  }

  // Seleccionar índice (si quieres indicadores clickables)
  goTo(i: number) {
    this.current = i;
  }
}
