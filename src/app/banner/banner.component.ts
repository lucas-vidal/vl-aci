import { Component, OnInit } from '@angular/core';
import { user } from '../model/users';
import { UsersService } from '../service/users.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})


export class BannerComponent implements OnInit {
  user: user = new user("","","","","","","","","","","","","","","");
    
    constructor(public userService: UsersService){ }
    ngOnInit(): void{
      this.getUser('lucasvidal')

    }

    getUser(username: string): void{
      this.userService.getUser(username).subscribe(data => {this.user = data;})
    }


  }




