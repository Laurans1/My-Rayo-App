import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-recovery',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './recovery.html',
  styleUrls: ['./recovery.css'],
})
export class Recovery {
  // Validador personalizado para verificar si las contraseñas coinciden
  private passwordsMatchValidator(control: import('@angular/forms').AbstractControl) {
    const form = control as FormGroup;
    const nuevaContrasena = form.get('nuevaContrasena')?.value;
    const confirmarContrasena = form.get('confirmarContrasena')?.value;
    return nuevaContrasena === confirmarContrasena ? null : { passwordMismatch: true };
  }

  public formRecovery = new FormGroup(
    {
      nuevaContrasena: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
      ]),
      confirmarContrasena: new FormControl('', [Validators.required]),
    },
    { validators: (control) => this.passwordsMatchValidator(control) } // Agregar el validador personalizado al FormGroup
  );

  public onSubmit() {
    if (this.formRecovery.valid) {
      console.log(this.formRecovery.value);
    } else {
      this.formRecovery.markAllAsTouched();
    }
  }
}
