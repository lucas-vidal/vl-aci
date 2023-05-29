import { Component } from '@angular/core';
import { User } from 'src/app/model/users';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent {
  user: User = new User("","","","","","","","","","","","","","","",);
    
  constructor(public userService: UsersService){ }
  ngOnInit(): void{
    this.getUser('lucasvidal')

  }

  getUser(username: string): void{
    this.userService.getUser(username).subscribe(data => {this.user = data;})
  }
}
