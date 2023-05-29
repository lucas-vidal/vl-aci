import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private eventSubject: Subject<any> = new Subject<any>();

  emitEvent(event: any): void {
    this.eventSubject.next(event);
  }

  getEvent(): Observable<any> {
    return this.eventSubject.asObservable();
  }
}
