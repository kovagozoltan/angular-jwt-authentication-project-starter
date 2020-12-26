import {HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private _http: HttpClient, private _router: Router) {}

  signupUser(data){
    return this._http.post('http://localhost:3000/signup', data);
  }

  loginUser(data){
    return this._http.post('http://localhost:3000/login', data);
  }

  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  isUserLoggedIn() {
    return !!localStorage.getItem('token');
  }

}
