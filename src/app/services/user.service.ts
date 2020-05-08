import { Injectable} from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { EventService } from './event.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];
  loggedInUserId: string;
  resourceUrl: string = "http://localhost:8080/users/";
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private http: HttpClient, private eventService: EventService) { }

  getUser(id: number){
    return this.http.get(this.resourceUrl + id, this.httpOptions)
  }
  getUsers(): void{
    this.http.get<User[]>(this.resourceUrl).subscribe((users: User[]) =>{
        this.users = users;
    });
  }
  postUser(user: User){
    return this.http.post(this.resourceUrl, user, this.httpOptions);
  }
  putUser(user: User){
    user.events = null;
    return this.http.put(this.resourceUrl + user.id, user, this.httpOptions);
  }
  deleteUser(id: number): void{
    this.http.delete(this.resourceUrl + id).subscribe(()=>{
      this.getUsers();   
    });
  }
}