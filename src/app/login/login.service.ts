import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private _router: Router
  ) { }

  login(email) {

    localStorage.setItem('user', email);
    this._router.navigate(['/']);
  }

  logout() {

    localStorage.removeItem('user');
    this._router.navigate(['/login']);
  }

  getUser(): string {

    if (localStorage.getItem('user')) {
      return localStorage.getItem('user')
    }
    return ''
  }

  isLogged(): boolean {

    if (localStorage.getItem('user')) {
      return true
    }
    return false
  }
}
