import { Component } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-btn-login',
  templateUrl: './btn-login.component.html',
  styleUrls: ['./btn-login.component.css']
})
export class BtnLoginComponent {
  constructor(public loginService: LoginService) {}

  logout(): void {
    this.loginService.logout();
    window.location.reload();
  }
}
