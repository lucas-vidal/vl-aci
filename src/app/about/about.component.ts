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
  about: string = "";
  user: User = new User(this.about,"","","","","","","","","","","","","","");
    
    constructor(public userService: UsersService,
                public loginService: LoginService){ }
    ngOnInit(): void{
      this.getAbout('lucasvidal')
    }

    getAbout(username: string): void{
      this.userService.getUser(username).subscribe(data => {
        this.user = data;
      })
    }

    updateAbout(): void {
      this.userService.updateUserJSON('lucasvidal', this.user).subscribe();
    }

  }