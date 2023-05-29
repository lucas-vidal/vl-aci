import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/service/experience.service';
import { ImageService } from 'src/app/service/image.service';


@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent {
  company: string = '';
  position: string = '';
  form: string = '';
  until: string = '';
  description: string = '';
  link: string = '1';
  img: string = '1';


  form_m: string = '';
  form_y: string = '';

  until_m: string = '';
  until_y: string = '';

  userImageUrl: string = '';
  evento: any;


  constructor(public experienceService: ExperienceService,
              public imageService: ImageService,
              ) {}

  ngOnInit(): void {}

  async addExperience(): Promise<void> {
    const experience: Experience = { company: this.company, position: this.position, form: this.form, until: this.until, description: this.description, link: this.link, img: this.img};

    experience.form = this.form_y + "-" + this.form_m + "-01"
    experience.until = this.until_y + "-" + this.until_m + "-01"

    if (this.evento) {
          await this.imageService.uploadImage(this.evento, experience.company);
          experience.img = this.imageService.url;
    }

    await this.experienceService.newExperience(experience).subscribe();
    console.log(experience)
    location.reload();
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



}
