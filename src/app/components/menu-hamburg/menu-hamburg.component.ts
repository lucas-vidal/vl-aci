import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-hamburg',
  templateUrl: './menu-hamburg.component.html',
  styleUrls: ['./menu-hamburg.component.css']
})
export class MenuHamburgComponent {
    isMenuOpen: boolean = false;

    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
  }
}
 

