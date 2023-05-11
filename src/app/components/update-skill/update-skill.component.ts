import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-update-skill',
  templateUrl: './update-skill.component.html',
  styleUrls: ['./update-skill.component.css']
})
export class UpdateSkillComponent {

   skills: Skills = new Skills(0, '', 0);

  constructor(public skillsService: SkillsService,
    private activatedRouter: ActivatedRoute,
    private router: Router,){ }

    
  ngOnInit(): void{



  }


  getSkill(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillsService.getSkill(id).subscribe(data => {
      this.skills = data;
      console.log(data)
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






