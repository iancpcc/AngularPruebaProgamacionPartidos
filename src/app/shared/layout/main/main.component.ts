import { RouterModule, RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterModule, RouterOutlet, HeaderComponent, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

isMenuOpen = false;


  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen

  }

}
