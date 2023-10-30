import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent {

  isZoomed = false;

  constructor(private el: ElementRef) {}

  zoomImage() {
    this.isZoomed = !this.isZoomed;

    if (this.isZoomed) {
      // Centra horizontalmente y verticalmente la imagen agrandada
      this.el.nativeElement.style.display = 'flex';
      this.el.nativeElement.style.alignItems = 'center';
      this.el.nativeElement.style.justifyContent = 'center';
    } else {
      // Restaura los estilos originales
      this.el.nativeElement.style.display = 'block';
      this.el.nativeElement.style.alignItems = 'initial';
      this.el.nativeElement.style.justifyContent = 'initial';
    }
  }

  zoomImage2() {
    this.isZoomed = !this.isZoomed;
  }

  
}
