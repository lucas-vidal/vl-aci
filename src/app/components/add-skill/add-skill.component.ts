import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../../service/skills.service';
import { Skills } from '../../model/skills';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {
  skill: string = '';
  value: number = 0;

  constructor(public skillsService: SkillsService, private router: Router) {}

  ngOnInit(): void {}

  newSkill(): void {
    const skill: Skills = { skill: this.skill, value: this.value };

    this.skillsService.newSkill(skill).subscribe();
    location.reload()
  }
}
