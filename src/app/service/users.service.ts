import { Injectable } from '@angular/core';
import { users } from '../model/users.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }
  baseUrl = 'https://jsonplaceholder.typicode.com/users/';
  

  getUsers() {
    debugger
    return this.http.get<users[]>(this.baseUrl);
  }
  deleteUser(id: number) {
    return this.http.delete<users[]>(this.baseUrl + id);
  }
  createUser(user: users) {
    return this.http.post(this.baseUrl, user);
  }
  getUserById(id: any) {
    return this.http.get<users>(this.baseUrl  + id);

  }
  updateUser(user: users) {
    return this.http.put(this.baseUrl  + user.id, user);
  }
}


