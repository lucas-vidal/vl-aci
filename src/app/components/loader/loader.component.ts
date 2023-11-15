import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  public isLoading: boolean = true;

  ngOnInit() {
    // Simula un tiempo de carga (reemplaza esto por tu lógica de carga real)
    setTimeout(() => {
      this.isLoading = false;
    }, 5000); // 2000 milisegundos (2 segundos)
  }
}
