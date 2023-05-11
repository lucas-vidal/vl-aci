import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Education } from '../model/education';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  url = environment.URL + 'education/'


  constructor(private HttpClient: HttpClient) { }

  // Obtener datos de educacion
  public getEducations(): Observable<Education[]>{
    return this.HttpClient.get<Education[]>(this.url)
  }

  // Obtener un usario
  public getEducation(id: number): Observable<Education>{
    return this.HttpClient.get<Education>(this.url + id)
  }  

  // Actualizar datos de educacion
  public updateEducation(id: number, education: Education): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    const body = JSON.stringify(education);
    return this.HttpClient.put<any>(this.url + id, body, { headers });
  }

  //Agregar nueva educacion
  public newEducation(education: Education): Observable<any>{
    return this.HttpClient.post<Education>(this.url, education)
  }

  //Elimiar educacion
  public deleteEducation(id: number): Observable<any>{
    return this.HttpClient.delete<Education>(this.url + id)
  }  
}
