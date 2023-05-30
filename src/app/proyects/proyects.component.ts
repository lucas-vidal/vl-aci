import { Component } from '@angular/core';
import { Proyects } from '../model/proyects';
import { LoginService } from '../service/login.service';
import { ProyectsService } from '../service/proyects.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent {
  proyects: Proyects[] = [];

  constructor(public proyectsService: ProyectsService,
    public loginService: LoginService) { }

  ngOnInit() {
    this.getProyects();
  }

  getProyects(): void {
    this.proyectsService.getProyects().subscribe(data => {
      this.proyects = data;
    });
  }

  deleteProyect(id: number): void{
    this.proyectsService.deleteProyect(id).subscribe()
    location.reload()
  }

}
