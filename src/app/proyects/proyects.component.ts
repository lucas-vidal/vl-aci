import { Component } from '@angular/core';
import { Proyects } from '../model/proyects';
import { LoginService } from '../service/login.service';
import { ProyectsService } from '../service/proyects.service';
import { ImageService } from '../service/image.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent {
  proyects: Proyects[] = [];

  id : number = 0
  title: string = '';
  description: string = '';
  link: string = '';
  img: string = '';

  proyectImageUrl: string = '';
  evento: any;

  constructor(
    public proyectsService: ProyectsService,
    public imageService: ImageService,
    public loginService: LoginService) { }

  ngOnInit() {
    this.getProyects();
  }

  getProyects(): void {
    this.proyectsService.getProyects().subscribe(data => {
      this.proyects = data;
    });
  }

  getProyect(id: number): void{

    this.proyectsService.getProyect(id).subscribe(data => {
      this.id = id
      this.title = data.title;
      this.description = data.description;
      this.link = data.link;
      this.proyectImageUrl = data.img;
      this.img = data.img;


    })
  }

  deleteProyect(id: number): void{
    this.proyectsService.deleteProyect(id).subscribe()
    location.reload()
  }

  async updateProyect(): Promise<void>  {
    const proyects: Proyects = { title: this.title, description: this.description, link: this.link, img: this.img};

    if (this.evento) {
      await this.imageService.uploadImage(this.evento, proyects.title);
      proyects.img = this.imageService.url;
    }

    await this.proyectsService.updateProyect(this.id, proyects).subscribe();

    location.reload()

  }

  async addProyect(): Promise<void> {
    const proyects: Proyects = { title: this.title, description: this.description, link: this.link, img: this.img};

    proyects.img = this.img

    if (this.evento) {
          await this.imageService.uploadImage(this.evento, proyects.title);
          proyects.img = this.imageService.url;
    }

    await this.proyectsService.newProyect(proyects).subscribe();
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

  cleanInputs(){
    this.id = 0
    this.title = "";
    this.description = "";
    this.link = "";
    this.proyectImageUrl = "";
    this.img = "";
  }

}
