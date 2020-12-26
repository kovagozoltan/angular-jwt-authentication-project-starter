import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userData = {email: '', password: ''}

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  loginUser(){
    this._auth.loginUser(this.userData).subscribe( (response: any) => {
      localStorage.setItem('token', response.token);
      this._router.navigate(['/home']);
    },
    error => {
      console.log(error.error.message);
    })
  }

}
