
import { Injectable } from '@angular/core';

import {Observable} from 'rxjs';
import {HttpClient } from '@angular/common/http'
import { User } from 'app/class/user/user';
import {EventEmitter} from '@angular/core'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  user=new User();
  $isLoggedIn=new EventEmitter();
  constructor(private _http : HttpClient,private router:Router) { }

  public loginUserFromRemote(user : User):Observable<any>{
    return this._http.post<any>("http://localhost:8080/login",user);
  }
  
  public gotomainpage()
    {
      //this._router.navigate(['mainpage']);
      this.loginUserFromRemote(this.user).subscribe(
        data =>{
        
        console.log("You have Logged in");
        this.router.navigate(['mainpage']);
        this.$isLoggedIn.emit(this.user.username);
      },
        error =>{
          console.log("Error: You have not logged in.")
        }
      )
    }
  public resgisterAsUser(user : User):Observable<any>{
    return this._http.post<any>("http://localhost:8080/signup",user)
}
}
