import { Component } from '@angular/core';
import { EducationService } from '../service/education.service';
import { Education } from '../model/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  education: Education[] = []
    
    constructor(public educationService: EducationService){ }
    ngOnInit(): void{
      this.getEducations()

    }

    getEducations(): void{
      this.educationService.getEducations().subscribe(data => {this.education = data;})
    }


}
