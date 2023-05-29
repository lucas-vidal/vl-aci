import { Component } from '@angular/core';
import { EducationService } from '../service/education.service';
import { Education } from '../model/education';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  educationA: Education[] = []
  educationB: Education[] = []

    constructor(public educationService: EducationService,
                public loginService: LoginService){ }
    ngOnInit(): void{
      this.getEducations()

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
    


    getEducations(): void {
      this.educationService.getEducations().subscribe(data => {
        this.educationA = data;
        this.educationB = data.map(education => ({
          ...education,
          form: this.convertDataTime(education.form),
          until: this.convertDataTime(education.until)
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
      });
    }
    
    deleteEducation(id: number): void{
      this.educationService.deleteEducation(id).subscribe()
      location.reload()
    }

}
