import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userData = {email: '', password: ''}

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  signupUser(){
    this._auth.signupUser(this.userData).subscribe( (response: any) => {
      localStorage.setItem('token', response.token);
      this._router.navigate(['/home'])
    },
    error => {
      console.log(error.error.message);
    })
  }

}
