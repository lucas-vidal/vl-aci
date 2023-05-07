import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {
  chart: any;
  var1: number = 45; // Define and assign the var1 property

  ngOnInit() {
    this.createChart();
  }

  createChart() {
    const canvas: any = document.getElementById('myChart');
    const ctx = canvas.getContext('2d');

    this.chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Variable 1', 'Variable 2'],
        datasets: [{
          data: [this.var1, 100 - this.var1], // Use this.var1
          backgroundColor: ['red', 'grey']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false // Oculta las leyendas
          }
        }
      }
    });
  }
}
