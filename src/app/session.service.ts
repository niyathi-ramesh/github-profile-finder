import { Injectable } from '@angular/core';
import { UserForm } from './app.model';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor() {}

  saveUserData(userInfo: UserForm) {
    sessionStorage.setItem('user', JSON.stringify(userInfo));
  }

  getUserData(): UserForm {
    let user = sessionStorage.getItem('user');
    return user ? JSON.parse(user) : {};
  }

  clearUserData() {
    sessionStorage.clear();
  }
}
