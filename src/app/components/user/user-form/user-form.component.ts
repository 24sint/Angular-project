import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {  
  model: User = new User();

  constructor(private userService: UserService, private location: Location ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.userService.postUser(this.model).subscribe(() => {
      location.assign("/users/list");
    });

  }

  get diagnostic() { return JSON.stringify(this.model) }
}