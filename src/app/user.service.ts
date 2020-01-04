import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { User } from './user';
import { Users } from './mock-users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private messageService: MessageService) { }

  getUsers(): Observable<User[]>{
    // TODO: send the message _after_ fetching the heroes
  this.messageService.add('UserService: fetched users');
    return of(Users);
  }
}
