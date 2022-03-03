import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from '../models/User';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getUsers(page = 1): Observable<User[]> {
    return this.http
      .get(`https://randomuser.me/api/?page=${page}&results=10&seed=abc`)
      .pipe(
        map((data: any) =>
          data.results.map((user: any) => {
            return {
              id: user?.id?.value,
              gender: user?.gender,
              name: `${user?.name?.first} ${user?.name?.last}`,
              email: user?.email,
              username: user?.login?.username,
              phone: user?.phone,
            };
          })
        )
      );
  }
}
