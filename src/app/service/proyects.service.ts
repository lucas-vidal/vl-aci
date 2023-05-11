import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Proyects } from '../model/proyects';

@Injectable({
  providedIn: 'root'
})
export class ProyectsService {
  url = environment.URL + 'projects/'


  constructor(private HttpClient: HttpClient) { }

  // Obtener datos de proyectos
  public getProyects(): Observable<Proyects[]>{
    return this.HttpClient.get<Proyects[]>(this.url)
  }

  // Obtener un proyecto
  public getProyect(id: number): Observable<Proyects>{
    return this.HttpClient.get<Proyects>(this.url + id)
  }  

  // Actualizar datos de proyecto
  public updateProyect(id: number, proyects: Proyects): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    const body = JSON.stringify(proyects);
    return this.HttpClient.put<any>(this.url + id, body, { headers });
  }

  //Agregar nuevo proyecto
  public newProyect(proyects: Proyects): Observable<any>{
    return this.HttpClient.post<Proyects>(this.url, proyects)
  }

  //Elimiar proyecto
  public deleteProyect(id: number): Observable<any>{
    return this.HttpClient.delete<Proyects>(this.url + id)
  }
}
