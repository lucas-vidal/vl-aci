import { Component } from '@angular/core';


@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent {

  images: string[] = [
    '../../assets/img03.jpg',
    '../../assets/img04.jpg',
    '../../assets/img05.jpg',
    '../../assets/img06.jpg',
    '../../assets/img07.jpg'
  ];



  currentImageIndex: number = 0;
  isZoomed = false;

  toggleZoom() {
    this.isZoomed = !this.isZoomed;
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    this.isZoomed = false;
  }

  prevImage() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    this.isZoomed = false;
  }


  

}
