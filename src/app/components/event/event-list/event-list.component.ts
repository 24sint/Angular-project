import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { ReservationService } from 'src/app/services/reservation.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { Event } from 'src/app/models/event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  get eventList() { return this.eventService.events }

  constructor(private eventService: EventService, private reservationService: ReservationService, private userService: UserService) { }

  ngOnInit(): void {
    this.eventService.getEvents();
  }
  handleDelete(id: number) { 
    this.eventService.deleteEvent(id);
  }
  handleReservation(eventId: string) { 
    this.reservationService.postReservation(eventId);
  }
  handleCancelReservation(event:Event){
    let userToCancel: User = event.users.find((user)=>user.id === Number(this.userService.loggedInUserId));

    let reservationId: number = userToCancel.reservationRef;
    this.reservationService.deleteReservation(reservationId);
  }
  checkIfReserved(users: User[]){
    return users.map((user)=>user.id).includes(Number(this.userService.loggedInUserId));
  }
  isUserSelected(): boolean{
    // let userId = this.userService.loggedInUserId;
    // return userId !== undefined && userId !== "Select User";
    return Number.parseInt(this.userService.loggedInUserId) > 0;
  }
}