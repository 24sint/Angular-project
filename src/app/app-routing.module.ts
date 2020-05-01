import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './components/user/user-detail/user-detail.component';
import { UserFormComponent } from './components/user/user-form/user-form.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { EventFormComponent } from './components/event/event-form/event-form.component';
import { EventListComponent } from './components/event/event-list/event-list.component';
import { EventDetailComponent } from './components/event/event-detail/event-detail.component';

const routes: Routes = [
  { path: 'users/form', component: UserFormComponent },
  { path: 'users/list', component: UserListComponent },
  { path: 'users/:userId', component: UserDetailComponent },
  { path: 'events/form', component: EventFormComponent },
  { path: 'events/list', component: EventListComponent },
  { path: 'events/:eventId', component: EventDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }