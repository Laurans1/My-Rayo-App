import { Routes } from '@angular/router';
import { Home } from './views/home/home';  // Importa la clase "Home"
import { Login } from './views/auth/login/login';
import { Recovery } from './views/auth/recovery/recovery';

export const routes: Routes = [
  
      { path: '', component: Home },                         // página principal
      { path: 'auth/login', component: Login },              // login
      { path: 'auth/recovery', component: Recovery },        // recuperar contraseña
      { path: '**', redirectTo: '' }                         // fallback
];
