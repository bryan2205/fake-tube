import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private fakeUSer = {
    name: 'Pippo',
    level: '900',
  };

  private $user: BehaviorSubject<any> = new BehaviorSubject(null);
  private keyStorage: string = 'user';
  constructor() {
    this.getUser();
  }

  login() {
    localStorage.setItem(this.keyStorage, JSON.stringify(this.fakeUSer));
    this.$user.next(this.fakeUSer);
  }

  logout() {
    localStorage.removeItem(this.keyStorage);
    this.$user.next(null);
  }

  me() {
    return this.$user.asObservable();
  }

  getUser() {
    if (localStorage.getItem(this.keyStorage)) return this.$user.next(JSON.parse(localStorage.getItem(this.keyStorage)!));
  }
}
