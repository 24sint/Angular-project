import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers();
  }

  get users(): User[]{ return this.userService.users };

  handleSelect(e){
    this.userService.loggedInUserId = e.target.value;
  }

}