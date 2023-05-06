
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnChanges {

  @Input() percentage: number = 10; // Inicializamos el porcentaje en 0
  @Input() color1: string = '#ff0000';
  @Input() color2: string = '#ff0000';

  ngOnChanges(changes: SimpleChanges) {
    if (this.percentage) {
      const randomPercentage = Math.floor(Math.random() * 101); // Generar un número aleatorio entre 0 y 100
      this.percentage = randomPercentage;
    }
  }
}
