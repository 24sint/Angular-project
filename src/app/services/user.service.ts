import { Injectable, EventEmitter } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];
  resourceUrl: string = "http://localhost:8080/users/";
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  usersChanged: EventEmitter<Object> = new EventEmitter();

  constructor(private http: HttpClient) { }

  getUser(id: number){
    return this.http.get(this.resourceUrl + id, this.httpOptions)
  }
  getUsers(): void{
    this.http.get<User[]>(this.resourceUrl).subscribe((users: User[])=>{
        this.users = users;
    });
  }
  postUser(user: User){
    return this.http.post(this.resourceUrl, user, this.httpOptions);
  }
  putUser(){

  }
  deleteUser(id: number): void{
    this.http.delete(this.resourceUrl + id).subscribe(()=>{
      this.getUsers();   
    });
  }
}