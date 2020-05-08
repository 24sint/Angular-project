import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {  
  model: User = new User();
  isCreate: boolean;
  constructor(private userService: UserService, private location: Location, private route: ActivatedRoute ) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      let id = params['userId'];
      this.isCreate = !id;
      if(!this.isCreate){
        this.userService.getUser(id).subscribe((user: User)=>{
          this.model = user;
        })
      }
    })
  }

  onCreateSubmit(){
    this.userService.postUser(this.model).subscribe(() => {
      location.assign("/users/list");
    });
  }
    onUpdateSubmit(){
      this.userService.putUser(this.model).subscribe(() => {
        location.assign("/users/list");
      });

  }

  get diagnostic() { return JSON.stringify(this.model) }
}
