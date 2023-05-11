import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../model/users';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = environment.URL + 'users/'
  url1 = environment.URL + 'usersj/'

  constructor(private HttpClient: HttpClient ) { }

  // Obtener datos de usuario
  public getUsers(): Observable<user>{
    return this.HttpClient.get<user>(this.url)
  }

  // Obtener un usario
  public getUser(username: string): Observable<user>{
    return this.HttpClient.get<user>(this.url + username)
  }

  //Agregar nuevo usuario
  public newUser(user: user): Observable<any>{
    return this.HttpClient.post<user>(this.url, user)
  }

  public updateUserJSON(username: string, user: user): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    const body = JSON.stringify(user);
    return this.HttpClient.put<any>(this.url1 + username, body, { headers });
  }
  

  //Actualizar usuario
  public updateUserURL(username: string, user: user): Observable<any>{
    return this.HttpClient.put<any>(this.url + username, user)
  }

  //Elimiar usuario
  public deleteUser(username: string): Observable<any>{
    return this.HttpClient.delete<user>(this.url + username)
  }
  
}
