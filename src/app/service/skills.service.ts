import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Skills } from '../model/skills';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  url = environment.URL + 'skills/'


  constructor(private HttpClient: HttpClient) { }

  // Obtener datos de educacion
  public getSkills(): Observable<Skills[]>{
    return this.HttpClient.get<Skills[]>(this.url)
  }

  // Obtener un usario
  public getSkill(id: number): Observable<Skills>{
    return this.HttpClient.get<Skills>(this.url + id)
  }  

  // Actualizar datos de skill
  public updateSkill(id: number, skill: Skills): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    const body = JSON.stringify(skill);
    return this.HttpClient.put<any>(this.url + id, body, { headers });
  }

  //Agregar nueva skill
  public newSkill(skill: Skills): Observable<any>{
    return this.HttpClient.post<Skills>(this.url, skill)
  }

  //Elimiar Skill
  public deleteSkill(id: number): Observable<any>{
    return this.HttpClient.delete<Skills>(this.url + id)
  } 
}
