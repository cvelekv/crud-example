import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from './model/user.model';

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}
  baseUrl: string = "http://localhost:8080/user=-portal/users";

  getUsers() {
    return this.http.get<User[]>(this.baseUrl);
  }

  createUser(user: User) {
    return this.http.post(this.baseUrl, user);
  }
  updateUser(user: User) {
    return this.http.put(this.baseUrl + "/" + user.id, user);
  }
  deleteUser(id: number) {
    return this.http.delete(this.baseUrl + "/" + id);
  }
}
