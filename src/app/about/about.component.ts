import { Component, OnInit } from '@angular/core';
import { User } from '../model/users';
import { UsersService } from '../service/users.service';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

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

   user: User = new User(this.about,"","","","","","","","","","","","","","");
    
    constructor(public userService: UsersService,
                public loginService: LoginService){ }
    ngOnInit(): void{
      this.getAbout('lucasvidal')
    }

    getAbout(username: string): void{
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
        
      })
    }

    updateAbout(): void {
2
    const user: User = {username: this.username, password: this.password, name: this.name, surname: this.surname, img: this.img, title: this.title, skill1: this.skill1, skill2: this.skill2,
                        skill3: this.skill3, skill4: this.skill4, linkedin: this.linkedin, instagram: this.instagram, facebook: this.facebook, github: this.github, about: this.about}

      this.userService.updateUser('lucasvidal', user).subscribe();

      location.reload()

    }

  }