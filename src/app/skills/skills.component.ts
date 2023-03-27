import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

}


import Chart from 'chart.js/auto';

@Component({
  selector: 'app-donut-chart',
  template: '<canvas id="myDoughnutChart"></canvas>',
})
export class DonutChartComponent implements OnInit {
  ngOnInit(): void {
    const ctx = document.getElementById('myDoughnutChart') as HTMLCanvasElement;

    const data = {
      labels: ['Partido Azul', 'Partido Rojo'],
      datasets: [
        {
          label: 'Votos',
          data: [25, 15],
          backgroundColor: [
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 99, 132, 0.5)',
          ],
          borderWidth: 1,
        },
      ],
    };

    const options = {
      plugins: {
        title: {
          display: true,
          text: 'Resultados de las elecciones',
        },
      },
      tooltips: {
        enabled: false,
      },
    };

    const chart = new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: options,
    });
  }
}
