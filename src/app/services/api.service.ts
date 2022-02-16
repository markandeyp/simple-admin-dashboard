import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from '../models/User';
import { Observable, of } from 'rxjs';
import USER_DATA from '../data/users.json';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  users: User[] = USER_DATA;

  constructor() {}

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User): Observable<boolean> {
    user.id = this.users.length + 1;
    this.users.push(user);
    return of(true);
  }

  updateUser(user: User): Observable<boolean> {
    const userToUpdate = this.users.find((u) => u.id === user.id);
    if (userToUpdate) {
      userToUpdate.name = user.name;
      userToUpdate.email = user.email;
      userToUpdate.role = user.role;
      return of(true);
    } else {
      return of(false);
    }
  }
}
