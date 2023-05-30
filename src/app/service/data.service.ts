import { Injectable } from '@angular/core';
import { Skills } from '../model/skills';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private skillsData: Skills[] = [];

  constructor() { }

  setSkillsData(skills: Skills[]): void {
    this.skillsData = skills;
  }

  getSkillsData(): Skills[] {
    return this.skillsData;
  }
}
