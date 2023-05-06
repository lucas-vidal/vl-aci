
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnChanges {

  @Input() percentage: number = 0;
  @Input() color: string = '#dddd';

  ngOnChanges(changes: SimpleChanges) {
    this.percentage = 15;
  }
  
}
