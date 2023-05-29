import { Component } from '@angular/core';
import { ExperienceService } from '../service/experience.service';
import { Experience } from '../model/experience';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  experienceA: Experience[] = []
  experienceB: Experience[] = []

    
    constructor(public experienceService: ExperienceService,
                public loginService: LoginService){ }
    ngOnInit(): void{
      this.getExperiences()

    }


    convertDataTime(dataTime: string) {
      const mesesAbreviados = ['ene.', 'feb.', 'mar.', 'abr.', 'may.', 'jun.', 'jul.', 'ago.', 'sep.', 'oct.', 'nov.', 'dic.'];
      const reggie = /(\d{4})-(\d{2})-(\d{2})/;
      const match = reggie.exec(dataTime);
      
      if (match) { 
        const [, year, month, day] = match; // Extraemos los valores correspondientes a año, mes y día del patrón de fecha y hora
        const monthIndex = parseInt(month, 10) - 1; // Restamos 1 al mes para obtener el índice correcto en el array de mesesAbreviados
        const monthAbbreviation = mesesAbreviados[monthIndex];// Obtenemos el nombre abreviado del mes utilizando el índice
        const dateObject = [parseInt(day, 10), monthAbbreviation, parseInt(year, 10)];// Creamos un objeto de fecha personalizado con día, mes y año
        
        return dateObject[1] + " " + dateObject[2];
      }
      return "actualidad";// Si el formato de fecha y hora no coincide, quiere decir que no termino
    }

    getExperiences(): void{

      this.experienceService.getExperiences().subscribe(data => {
        this.experienceA = data;

        this.experienceB = data.map(experience => ({
          ...experience,
          form: this.convertDataTime(experience.form),
          until: this.convertDataTime(experience.until)
        })).sort((a, b) => {
          // Ordenar por la propiedad 'form'
          if (a.form > b.form) {
            return -1;
          } else if (a.form < b.form) {
            return 1;
          } else {
            return 0;
          }
        });
        console.log(this.experienceA)
        console.log(this.experienceB)
      });

    }

    deleteExperience(id: number): void{
      this.experienceService.deleteExperience(id).subscribe()
      location.reload()
    }



}
