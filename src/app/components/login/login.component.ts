import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  error: boolean = false;
  initSesion: boolean = false;
  username1: string = "";


  constructor(
    public loginService: LoginService,
    private router: Router
  ) {}



  logins(): void {
    this.loginService.login(this.username, this.password).subscribe(result => {
      this.username1 = this.username;
      this.username = "";
      this.password = "";
      if (result) {
        this.error = false;
        this.initSesion = true;

        this.router.navigate(['']);
      } else {
        this.error = true;
      }
    });
  }



}
