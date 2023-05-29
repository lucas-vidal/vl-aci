import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { User } from '../model/users';
import { login } from '../model/login';
import { EventService } from '../service/event.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = environment.URL + 'users/';

  private loggedIn = false;

  constructor(private httpClient: HttpClient,
              private eventService: EventService) {}

  // Obtener datos de usuario
  public getUsers(): Observable<User>{
    return this.httpClient.get<User>(this.url);
  }

  login(username: string, password: string): Observable<boolean> {

    // Hacer la llamada a la API para validar las credenciales
    return this.httpClient.get<login>(this.url + username).pipe(
      map(data => {
        if (data.username === username && data.password === password) {

          // this.loggedIn = true;
          localStorage.setItem('isLoggedIn', 'true'); // Guarda el estado de inicio de sesión en el almacenamiento local
          
          return true;
        } else {
          return false;
        }
      }),
      catchError(() => of(false)) // Manejar errores de la llamada a la API
    );
  }

  logout(): void {
    // this.loggedIn = false;
    localStorage.setItem('isLoggedIn', 'false');
    // localStorage.removeItem('isLoggedIn');
    this.eventService.emitEvent({ type: 'logout' });
  }

  isLoggedIn(): boolean {
    var isLoggedInStr = localStorage.getItem("isLoggedIn");
    if (isLoggedInStr === null) {
      return false; // Si el valor no está definido en localStorage, se asume que el usuario no ha iniciado sesión.
    }
    
    var isLoggedInBool = JSON.parse(isLoggedInStr);
    return isLoggedInBool;
  }
  
}
