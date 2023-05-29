import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EducationService } from 'src/app/service/education.service';
import { Education } from 'src/app/model/education';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent {

  institute: string = '';
  certificate: string = '';
  form: string = '';
  until: string = '';
  state: string = '';
  link: string = '1';

  form_m: string = '';
  form_y: string = '';

  until_m: string = '';
  until_y: string = '';


  constructor(public educationService: EducationService, 
              private router: Router) {}

  ngOnInit(): void {}

  addEducation(): void {

    this.form = this.form_y + "-" + this.form_m + "-01"
    this.until = this.until_y + "-" + this.until_m + "-01"

    const education: Education = { institute: this.institute, certificate: this.certificate, form: this.form, until: this.until, state: this.state, link: this.link,};
    this.educationService.newEducation(education).subscribe();
    location.reload();
  }
}