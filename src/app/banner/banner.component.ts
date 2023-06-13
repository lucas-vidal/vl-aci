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

        this.username = data.username;
        this.password = data.password;
        this.name = data.name;
        this.surname = data.surname;
        this.img = data.img;
        this.title = data.title;
        this.skill1 = data.skill1;
        this.skill2 = data.skill2;
        this.skill3 = data.skill3;
        this.skill4 = data.skill4;
        this.linkedin = data.linkedin;
        this.instagram = data.instagram;
        this.facebook = data.facebook;
        this.github = data.github;
        
        this.userImageUrl = this.img;
      })
    }

    async updateUser(): Promise<void> {
    
      const user: User = {username: this.username, password: this.password, name: this.name, surname: this.surname, img: this.img, title: this.title, skill1: this.skill1, skill2: this.skill2,
        skill3: this.skill3, skill4: this.skill4, linkedin: this.linkedin, instagram: this.instagram, facebook: this.facebook, github: this.github, about: this.about}


      // const username = this.activatedRouter.snapshot.params['username'];
      if (this.evento) {
            await this.uploadImage(this.evento, user.username);
            user.img = this.imageService.url;
      }
  
      await this.userService.updateUser('lucasvidal', user).subscribe();

    
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




