import { Component, OnInit, OnDestroy } from '@angular/core';
import Chart from 'chart.js/auto';
import { SkillsService } from '../service/skills.service';
import { Skills } from '../model/skills';
import { LoginService } from '../service/login.service';
import { UpdateSkillComponent } from '../components/update-skill/update-skill.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills: Skills[] = [];
  intervalId: any; // Variable para almacenar el ID del intervalo
  ids: string =  ""

  constructor(public skillsService: SkillsService,
              public loginService: LoginService,
              public updateSkills: UpdateSkillComponent,
              ) { }
  
  ngOnInit() {
    this.getSkills();
    this.startChartDelay(); // Iniciar el intervalo al cargar la página
  }


  
  getSkills(): void {
    this.skillsService.getSkills().subscribe(data => {
      this.skills = data;
    });
  }

  startChartDelay() {
    setTimeout(() => {
      this.skills.forEach(skill => {
        this.createChart(skill.skill, skill.value);
      });
    }, 3000); // Retraso de 2 segundos (2000 ms)
  }

  createChart(skill: string, value: number) {
    const canvas: any = document.getElementById(skill);
    if (canvas) {
      const ctx = canvas.getContext('2d');

      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['', ''],
          datasets: [{
            data: [value, 100 - value],
            backgroundColor: ['#2187C8', '#c7c7c7']
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false
            }
          }
        }
      });
    }
  }

  deleteSkill(id: number): void{
    this.skillsService.deleteSkill(id).subscribe()
    location.reload()
  }
  

}
