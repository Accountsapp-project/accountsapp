
import { Injectable } from '@angular/core';

import {from, Observable} from 'rxjs';
import {HttpClient } from '@angular/common/http'
import { User } from 'app/class/user/user';
import {EventEmitter} from '@angular/core'
import {BehaviorSubject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  user=new User();

  constructor(private _http : HttpClient) { }

  private content = new BehaviorSubject<string>("default value");
  public share = this.content.asObservable();
  
  public loginUserFromRemote(user : User):Observable<any>{
    return this._http.post<any>("http://localhost:8080/login",user);
  }

  updateData(text){
    this.content.next(text);
  }

  public resgisterAsUser(user : User):Observable<any>{
    return this._http.post<any>("http://localhost:8080/signup",user)
}
}
