import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// IMPORTA los componentes que cree (rutas relativas desde home.ts)
import { Hero } from './hero/hero';
import { HeroInfo } from './hero-info/hero-info';
import { Pasos } from './pasos/pasos';
import { PerfilClientes } from './perfil-clientes/perfil-clientes';
import { Testimonios } from './testimonios/testimonios';
import { Pagos } from './pagos/pagos';
import { Networking } from './networking/networking'; 
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Hero, HeroInfo, Pasos, PerfilClientes, Testimonios, Pagos, Networking],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {}

