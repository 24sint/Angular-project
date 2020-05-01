import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  urrentEvent: Event;
  currentEvent: Event;
  constructor(private route: ActivatedRoute, private eventService: EventService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params['eventId'];
      this.eventService.getEvent(id).subscribe((event: Event)=>{
        this.currentEvent = event;
      })
    })
  }
  }


