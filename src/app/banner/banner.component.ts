import { Component, OnInit } from '@angular/core';
import { User } from '../model/users';
import { UsersService } from '../service/users.service';
import { LoginService } from '../service/login.service';
import { ImageService } from '../service/image.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})


export class BannerComponent implements OnInit {

  username: string = '';
  password: string = '';
  name: string = '';
  surname: string = '';
  title: string = '';
  linkedin: string = '';
  github: string = '';
  facebook: string = '';
  instagram: string = '';
  skill1: string = '';
  skill2: string = '';
  skill3: string = '';
  skill4: string = '';
  about: string = '';
  img: string = '';

  userImageUrl: string = '';
  evento: any;

  user: User = new User("" ,"" ,this.name ,this.surname ,"" ,this.title ,this.linkedin ,this.github ,this.facebook ,this.instagram ,this.skill1 ,this.skill2 ,this.skill3 ,this.skill4 ,this.img);

    constructor(public userService: UsersService,
                public loginService: LoginService,
                public imageService: ImageService,){ }
    ngOnInit(): void{
      this.getUser('lucasvidal')

    }



    getUser(username: string): void{
      this.userService.getUser(username).subscribe(data => {
        this.user = data;
      })
    }

    updateAbout(): void {
      this.userService.updateUserJSON('lucasvidal', this.user).subscribe();
    }


  
    async updateUser(): Promise<void> {
    
  
      // const username = this.activatedRouter.snapshot.params['username'];
      if (this.evento) {
            await this.uploadImage(this.evento, this.username);
            this.img = this.imageService.url;
      }
  
      await this.userService.updateUserJSON('lucasvidal', this.user).subscribe();

    
      location.reload()
  
    }
    
    async uploadImage($event: any, names: string): Promise<void> {
  
      const name = "profile_" + names;
  
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




