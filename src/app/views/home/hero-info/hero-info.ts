import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // lo necesitamos porque usamos routerLink en el template

@Component({
  selector: 'app-hero-info',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './hero-info.html',
  styleUrls: ['./hero-info.css']
})
export class HeroInfo {}
