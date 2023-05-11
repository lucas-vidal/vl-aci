import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from 'src/app/model/users';
import { ImageService } from 'src/app/service/image.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-update-banner',
  templateUrl: './update-banner.component.html',
  styleUrls: ['./update-banner.component.css']
})
export class UpdateBannerComponent {
  user: user = new user("","","","","","","","","","","","","","","",);
  userImageUrl: string = '';
  constructor(
    public userService: UsersService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    public imageService: ImageService){ }


  ngOnInit(): void{
    this.getUser('lucasvidal')
    this.imageService.url = this.user.img;
  }


  getUser(username: string): void{
    this.userService.getUser(username).subscribe(data => {
      this.user = data;
      this.userImageUrl = data.img
    })
  }

  updateUser(): void {
    const username = this.activatedRouter.snapshot.params['username'];
    this.user.img = this.imageService.url;
    this.userService.updateUserJSON('lucasvidal', this.user).subscribe(
      data => {
        this.router.navigate(['']);
      },
      err => {
        alert("Error al modificar el usuario");
        this.router.navigate(['']);
      }
    );
  }
  
  uploadImage($event:any){
    const username = this.activatedRouter.snapshot.params['username']
    const name = "profile_" + username;
  
    this.imageService.uploadImage($event, name);
    this.userImageUrl = this.imageService.url;
  
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
