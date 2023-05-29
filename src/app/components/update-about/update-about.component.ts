import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/users';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-update-about',
  templateUrl: './update-about.component.html',
  styleUrls: ['./update-about.component.css']
})
export class UpdateAboutComponent {
  user: User = new User("","","","","","","","","","","","","","","",);
    
  constructor(public userService: UsersService,
    private activatedRouter: ActivatedRoute,
    private router: Router,){ }
  ngOnInit(): void{
    this.getUser('lucasvidal')

  }


  getUser(username: string): void{
    this.userService.getUser(username).subscribe(data => {
      this.user = data;
    })
  }

  updateUser(): void {
    const username = this.activatedRouter.snapshot.params['username'];
    this.userService.updateUserJSON('lucasvidal', this.user).subscribe(
      data => {
        location.reload()     
      },
      err => {
        alert("Error al modificar el usuario");
        this.router.navigate(['']);
      }
    );
  }
}
