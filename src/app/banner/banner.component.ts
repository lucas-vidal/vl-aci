import { Component, OnInit } from '@angular/core';
import { User } from '../model/users';
import { UsersService } from '../service/users.service';
import { LoginService } from '../service/login.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})


export class BannerComponent implements OnInit {
  user: User = new User("","","","","","","","","","","","","","","");

    constructor(public userService: UsersService,
                public loginService: LoginService){ }
    ngOnInit(): void{
      this.getUser('lucasvidal')

    }

    getUser(username: string): void{
      this.userService.getUser(username).subscribe(data => {this.user = data;})
    }


  }




