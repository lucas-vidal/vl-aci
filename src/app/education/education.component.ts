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

  form_a  = [0,0,0];


  id: number = 0

  institute: string = '';
  certificate: string = '';
  form: string = '';
  until: string = '';
  state: string = '';
  link: string = '1';

  form_m: string = '';
  form_y: string = '';

  until_m: string = '';
  until_y: string = '';

    constructor(public educationService: EducationService,
                public loginService: LoginService){ }
    ngOnInit(): void{
      this.getEducations()

    }

    getEducations(): void {
      this.educationService.getEducations().subscribe(data => {
        this.educationA = data;
        this.educationB = data.map(education => ({
          ...education,
          form: this.convertDataTime1(education.form),
          until: this.convertDataTime1(education.until)
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

    getEducation(id: number): void{

      this.educationService.getEducation(id).subscribe(data => {
        this.id = id
        this.institute = data.institute;
        this.certificate = data.certificate;
        this.form_m = this.convertDataTime2(data.form)[1]
        this.form_y = this.convertDataTime2(data.form)[2]
        this.until_m = this.convertDataTime2(data.until)[1]
        this.until_y = this.convertDataTime2(data.until)[2]
        this.state = data.state;
        this.link = data.link;

      })
    }
    
    deleteEducation(id: number): void{
      this.educationService.deleteEducation(id).subscribe()
      location.reload()
    }

    updateEducation(): void {
      this.form = this.form_y + "-" + this.form_m + "-01"
      this.until = this.until_y + "-" + this.until_m + "-01"

      const education: Education = { institute: this.institute, certificate: this.certificate, form: this.form, until: this.until, state: this.state, link: this.link,};
  
      this.educationService.updateEducation(this.id, education).subscribe();
  
      location.reload()
  
    }

    addEducation(): void {

      this.form = this.form_y + "-" + this.form_m + "-01"
      this.until = this.until_y + "-" + this.until_m + "-01"
  
      const education: Education = { institute: this.institute, certificate: this.certificate, form: this.form, until: this.until, state: this.state, link: this.link,};
      this.educationService.newEducation(education).subscribe();
      location.reload();
    }

    convertDataTime1(dataTime: string) {
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

    convertDataTime2(dataTime: string) {
      const reggie = /(\d{4})-(\d{2})-(\d{2})/;
      const match = reggie.exec(dataTime);
    
      if (match) {
        const [, year, month, day] = match;
    
        const dateObject = [day, month, year];
    
        return dateObject;
      }
    
      return ['0', '0', '0']; // Devolver un array de cadenas de texto con valores predeterminados si el formato no coincide
    }
    
    cleanInputs(){
      this.id = 0
      this.institute = "";
      this.certificate = "";
      this.form_m = "";
      this.form_y = "";
      this.until_m = "";
      this.until_y = "";
      this.state = "";
      this.link = "";
    }
    
    


}
