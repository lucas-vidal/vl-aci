import { Component } from '@angular/core';
import { ExperienceService } from '../service/experience.service';
import { Experience } from '../model/experience';
import { LoginService } from '../service/login.service';
import { ImageService } from '../service/image.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  experienceA: Experience[] = []
  experienceB: Experience[] = []

  id: number = 0

  company: string = '';
  position: string = '';
  form: string = '';
  until: string = '';
  description: string = '';
  link: string = '';
  img: string = '';


  form_m: string = '';
  form_y: string = '';

  until_m: string = '';
  until_y: string = '';

  userImageUrl: string = '';
  evento: any;

    
    constructor(public experienceService: ExperienceService,
                public loginService: LoginService,
                public imageService: ImageService,){ }

    ngOnInit(): void{
      this.getExperiences()

    }


    getExperiences(): void{

      this.experienceService.getExperiences().subscribe(data => {
        this.experienceA = data;

        this.experienceB = data.map(experience => ({
          ...experience,
          form: this.convertDataTime1(experience.form),
          until: this.convertDataTime1(experience.until)
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

    getExperience(id: number): void{

      this.experienceService.getExperience(id).subscribe(data => {

        this.id = id
        this.company = data.company;
        this.position = data.position;
        this.form_m = this.convertDataTime2(data.form)[1]
        this.form_y = this.convertDataTime2(data.form)[2]
        this.until_m = this.convertDataTime2(data.until)[1]
        this.until_y = this.convertDataTime2(data.until)[2]
        this.description = data.description;
        this.link = data.link;
        this.userImageUrl = data.img;
        this.img = data.img;

      })
    }

    deleteExperience(id: number): void{
      this.experienceService.deleteExperience(id).subscribe()
      location.reload()
    }

    async updateExperience(): Promise<void>  {
      this.form = this.form_y + "-" + this.form_m + "-01"
      this.until = this.until_y + "-" + this.until_m + "-01"

      const experience: Experience = { company: this.company, position: this.position, form: this.form, until: this.until, description: this.description, link: this.link, img: this.img};
  
      if (this.evento) {
        await this.imageService.uploadImage(this.evento, experience.company);
        experience.img = this.imageService.url;
      }
  
      await this.experienceService.updateExperience(this.id, experience).subscribe();
  
      location.reload()
  
    }

    async addExperience(): Promise<void> {
      const experience: Experience = { company: this.company, position: this.position, form: this.form, until: this.until, description: this.description, link: this.link, img: this.img};
  
      experience.form = this.form_y + "-" + this.form_m + "-01"
      experience.until = this.until_y + "-" + this.until_m + "-01"
  
      if (this.evento) {
            await this.imageService.uploadImage(this.evento, experience.company);
            experience.img = this.imageService.url;
      }
  
      await this.experienceService.newExperience(experience).subscribe();
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

    async uploadImage($event: any, names: string): Promise<void> {

      const name = "company_" + names;
  
      await this.imageService.uploadImage($event, name);
  
      this.userImageUrl = this.imageService.url;
    }
  
  
    loadImageDOM($event:any){
      
      this.evento = $event
      const file = this.evento.target.files[0]; // Obtener el archivo seleccionado
  
      if (file) {
        const reader = new FileReader();
    
        reader.onload = (e: any) => {
          this.userImageUrl = e.target.result; // Asignar la dirección URL del archivo a la propiedad userImageUrl
        };
    
        reader.readAsDataURL(file); // Leer el archivo como una URL de datos
      }
    }

    cleanInputs(){
      this.id = 0
      this.company = "";
      this.position = "";
      this.form_m = "";
      this.form_y = "";
      this.until_m = "";
      this.until_y = "";
      this.description = "";
      this.link = "";
      this.img = "";
    }

}
