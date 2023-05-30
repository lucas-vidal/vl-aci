import { Component, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { DataService } from 'src/app/service/data.service';
import { SkillsService } from 'src/app/service/skills.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-update-skill',
  templateUrl: './update-skill.component.html',
  styleUrls: ['./update-skill.component.css']
})
export class UpdateSkillComponent {

  id: any

   skills: Skills = new Skills(0, '', 0);

  constructor(public skillsService: SkillsService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private dataService: DataService){ }

    
  ngOnInit(): void{

    const skillsData = this.dataService.getSkillsData();
    if (skillsData.length > 0) {
      this.skills = skillsData[0];
    }

  }

  getId() {
    console.log(this.skills);
    
  }

  getIds(): void{
     this.id = this.activatedRouter.snapshot.params['id'];
    
    console.log(this.id)
    console.log(45)
  }

  getSkill(id: number): void{
    this.skillsService.getSkill(id).subscribe(data => {
      this.skills = data;
      console.log(this.skills)
    })
  }

  updateSkill(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillsService.updateSkill(id, this.skills).subscribe(
      data => {
        // location.reload();     
        this.router.navigate(['']);
 
      },
      err => {
        alert("Error al modificar el usuario");
        this.router.navigate(['']);
      }
    );
  }

}






