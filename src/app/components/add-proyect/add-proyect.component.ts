import { Component } from '@angular/core';
import { Proyects } from 'src/app/model/proyects';
import { ImageService } from 'src/app/service/image.service';
import { ProyectsService } from 'src/app/service/proyects.service';

@Component({
  selector: 'app-add-proyect',
  templateUrl: './add-proyect.component.html',
  styleUrls: ['./add-proyect.component.css']
})
export class AddProyectComponent {

  title: string = '';
  description: string = '';
  link: string = '';
  img: string = '';

  proyectImageUrl: string = '';
  evento: any;

  constructor(public ProyectsService: ProyectsService,
    public imageService: ImageService,
    ) {}


  ngOnInit(): void {}

  async addProyect(): Promise<void> {
    const proyects: Proyects = { title: this.title, description: this.description, link: this.link, img: this.img};

    if (this.evento) {
          await this.imageService.uploadImage(this.evento, proyects.title);
          proyects.img = this.imageService.url;
    }

    await this.ProyectsService.newProyect(proyects).subscribe();
    console.log(proyects)
    location.reload();
  }

  async uploadImage($event: any, names: string): Promise<void> {

    const name = "proyect_" + names;

    await this.imageService.uploadImage($event, name);

    this.proyectImageUrl = this.imageService.url;
  }


  loadImageDOM($event:any){
    
    this.evento = $event
    const file = this.evento.target.files[0]; // Obtener el archivo seleccionado

    if (file) {
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
        this.proyectImageUrl = e.target.result; // Asignar la dirección URL del archivo a la propiedad userImageUrl
      };
  
      reader.readAsDataURL(file); // Leer el archivo como una URL de datos
    }
  }


}
