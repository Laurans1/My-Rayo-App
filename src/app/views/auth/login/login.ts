import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service'; //importar el servicio

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  public formLogin = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      //Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
    ]),
  });

  // Variables para mostrar mensajes al usuario
    mensaje = '';
    cargando = false;

     constructor(private readonly authService: AuthService) {} // Inyectar el servicio


  // Método que se ejecuta al enviar el formulario
  public onSubmit() {
    if (!this.formLogin.valid) {
      // Si no es válido, marco todos los campos como tocados
      this.formLogin.markAllAsTouched();
      return;
    }

// Preparo los datos que se enviarán a la API
    const datos = {
      userName: this.formLogin.get('userName')?.value!,
      password: this.formLogin.get('password')?.value!,
    };

    this.cargando = true;
    this.mensaje = '';

    // Llamada al servicio
    this.authService.login(datos).subscribe({
      next: (respuesta) => {
        this.cargando = false;
        // Si la API responde con un token → login exitoso
        if (respuesta && Number(respuesta['Solicitud']['CODIGO']) === 200) {
          // localStorage.setItem('token', respuesta.token); // Guardamos el token
          if (respuesta['Solicitud']['CLIENTE']) {
            localStorage.setItem('clienteId', respuesta['Solicitud']['CLIENTE']);
          }
          if (respuesta['Solicitud']['CONTACTO']) {
            localStorage.setItem('contactoId', respuesta['Solicitud']['CONTACTO']);
          }
          // respuesta['Solicitud']['CONTACTO'] && localStorage.setItem('contactoId', respuesta['Solicitud']['CONTACTO']);
          // respuesta['Solicitud']['CLIENTE'] && localStorage.setItem('clienteId', respuesta['Solicitud']['CLIENTE']);
          this.mensaje = 'Login exitoso';
        } else {
          this.mensaje = 'Respuesta inesperada';
        }
      },
      error: (err) => {
        this.cargando = false;
        // Si la API da error (400), se muestra el mensaje
        this.mensaje = err.error?.error || 'Credenciales incorrectas';
      },
    });
  }


  // Variable del modal
  showModal = false;

  // Abrir modal
  abrirModal() {
    this.showModal = true;
  }

  // Cerrar modal
  cerrarModal() {
    this.showModal = false;
  }
}
