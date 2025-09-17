import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  public formLogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
    ]),
  });

  public onSubmit() {
    if (this.formLogin.valid) {
      console.log(this.formLogin.value);
    } else {
      this.formLogin.markAllAsTouched();
    }
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
