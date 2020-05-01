import { Injectable, EventEmitter } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Event } from '../models/event';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  resourceUrl: string = "http://localhost:8080/events/";
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  usersChanged: EventEmitter<Object> = new EventEmitter();

  constructor(private http: HttpClient) { }

  getEvent(id: number){
    return this.http.get(this.resourceUrl + id, this.httpOptions)
  }
  getEvents(): Observable<Event[]>{
    return this.http.get<Event[]>(this.resourceUrl);
  }
  postEvent(event: Event){
    return this.http.post(this.resourceUrl, event, this.httpOptions);
  }
  putEvent(){

  }
  deleteEvent(id: number): void{
    this.http.delete(this.resourceUrl + id).subscribe(()=>{

      this.getEvents().subscribe((userResList: Event[])=>{
        this.usersChanged.emit(userResList);
      })
      
    });
  }
}