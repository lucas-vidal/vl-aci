import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/users';
import { ImageService } from 'src/app/service/image.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-update-banner',
  templateUrl: './update-banner.component.html',
  styleUrls: ['./update-banner.component.css']
})
export class UpdateBannerComponent {


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

  constructor(
    public userService: UsersService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    public imageService: ImageService,
    // public user: User 
    ){ }


  ngOnInit(): void{
    this.getUser('lucasvidal')
    this.imageService.url = this.img;
  }


  getUser(username: string): void{
    // const user: User = { username: this.username, password: this.password, name: this.name, surname: this.surname, title: this.title, linkedin: this.linkedin, github: this.github, facebook: this.facebook, instagram: this.instagram, skill1: this.skill1, skill2: this.skill2, skill3: this.skill3, skill4: this.skill4, about: this.about, img: this.img };

    this.userService.getUser(username).subscribe(data => {

      this.username = data.username;
      this.password = data.password;
      this.name = data.name;
      this.surname = data.surname;
      this.about = data.about;
      this.title = data.title;
      this.linkedin = data.linkedin;
      this.github = data.github;
      this.facebook = data.facebook;
      this.instagram = data.instagram;
      this.skill1 = data.skill1;
      this.skill2 = data.skill2;
      this.skill3 = data.skill3;
      this.skill4 = data.skill4;
      this.img = data.img;

      this.userImageUrl = data.img

    })
  }

  async updateUser(): Promise<void> {
    const user: User = { username: this.username, password: this.password, name: this.name, surname: this.surname, title: this.title, linkedin: this.linkedin, github: this.github, facebook: this.facebook, instagram: this.instagram, skill1: this.skill1, skill2: this.skill2, skill3: this.skill3, skill4: this.skill4, about: this.about, img: this.img };
  
    user.password = this.password
    user.about = this.about
    user.img = this.img

    // const username = this.activatedRouter.snapshot.params['username'];
    if (this.evento) {
          await this.uploadImage(this.evento, user.username);
          user.img = this.imageService.url;
    }
    console.log(user)

    await this.userService.updateUserJSON('lucasvidal', user).subscribe();
  
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




  // getUsers(): void{
  //   this.userService.getUsers().subscribe(data => {this.user = data})
    
  // }

  // addNewUser(): void{
  //    this.userService.newUser(user).subscribe(data =>{this.user = data})
  // }

  // updateUser(): void{
  //   const username = this.activatedRouter.snapshot.params['username'];
  //   this.user.img = this.imageService.url

  //   this.userService.updateUser("lucasvidal", this.user).subscribe( 
  //     data => {
  //     this.router.navigate(['']);
  //   }, err => {
  //     alert("Error al modificar el usuario");
  //     this.router.navigate(['']);
  //   }
  //   )
  // }

//   deleteUser(username: string): void{
//     this.userService.deleteUser(username).subscribe(data =>{this.getUsers()})
//  }





}
