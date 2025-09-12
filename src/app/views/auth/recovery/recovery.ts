import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-recovery',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './recovery.html',
  styleUrl: './recovery.css'
})
export class Recovery {
  //  Variables para las contraseñas
  nuevaContrasena = '';
  confirmarContrasena = '';
  mensaje = '';

  //  Simulación actualización de contraseña
  actualizar() {
    if (!this.nuevaContrasena || !this.confirmarContrasena) {
      this.mensaje = ' Debes llenar ambos campos';
      return;
    }

    if (this.nuevaContrasena !== this.confirmarContrasena) {
      this.mensaje = ' Las contraseñas no coinciden';
      return;
    }

    this.mensaje = 'Contraseña actualizada correctamente';
    this.nuevaContrasena = '';
    this.confirmarContrasena = '';
  }
}
