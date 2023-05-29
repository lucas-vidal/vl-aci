import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Experience } from '../model/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  url = environment.URL + 'experience/'


  constructor(private HttpClient: HttpClient) { }

  // Obtener datos de educacion
  public getExperiences(): Observable<Experience[]>{
    return this.HttpClient.get<Experience[]>(this.url)
  }

  // Obtener un usario
  public getExperience(id: number): Observable<Experience>{
    return this.HttpClient.get<Experience>(this.url + id)
  }  

  // Actualizar datos de educacion
  public updateExperience(id: number, education: Experience): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    const body = JSON.stringify(education);
    return this.HttpClient.put<any>(this.url + id, body, { headers });
  }

  //Agregar nueva educacion
  public newExperience(education: Experience): Observable<any>{
    return this.HttpClient.post<Experience>(this.url, education)
  }

  //Elimiar educacion
  public deleteExperience(id: number): Observable<any>{
    return this.HttpClient.delete<Experience>(this.url + id)
  }  
}
