import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/users';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = environment.URL + 'users/'

  constructor(private HttpClient: HttpClient ) { }

  // Obtener datos de usuario
  public getUsers(): Observable<User>{
    return this.HttpClient.get<User>(this.url)
  }

  // Obtener un usario
  public getUser(username: string): Observable<User>{
    return this.HttpClient.get<User>(this.url + username)
  }

  //Agregar nuevo usuario
  public newUser(user: User): Observable<any>{
    return this.HttpClient.post<User>(this.url, user)
  }

  public updateUserJSON(username: string, user: User): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    const body = JSON.stringify(user);
    return this.HttpClient.put<any>(this.url + username, body, { headers });
  }
  

  //Actualizar usuario
  public updateUserURL(username: string, user: User): Observable<any>{
    return this.HttpClient.put<any>(this.url + username, user)
  }

  //Elimiar usuario
  public deleteUser(username: string): Observable<any>{
    return this.HttpClient.delete<User>(this.url + username)
  }
  
}
