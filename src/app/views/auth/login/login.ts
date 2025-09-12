import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  //  Variables del login
  correo = '';
  contrasena = '';
  mensaje = '';

  //  Variables del modal recovery
  mostrarModal = false;
  correoRecovery = '';
  mensajeRecovery = '';

  //  Abre el modal de recuperación
  abrirModal() {
    this.mostrarModal = true;
  }

  //  Cierra el modal
  cerrarModal() {
    this.mostrarModal = false;
    this.mensajeRecovery = '';
    this.correoRecovery = '';
  }

  //  Simulación login (usuario fijo)
  login() {
    if (this.correo === 'test@correo.com' && this.contrasena === '123456') {
      this.mensaje = 'Login correcto';
    } else {
      this.mensaje = 'Usuario o contraseña incorrectos';
    }
  }

  //  Simulación recuperación (solo funciona con correo válido)
  recuperar() {
    if (this.correoRecovery === 'test@correo.com') {
      this.mensajeRecovery = `Se envió un correo a ${this.correoRecovery} `;
    } else {
      this.mensajeRecovery = ' Este correo no está registrado';
    }
  }
}
