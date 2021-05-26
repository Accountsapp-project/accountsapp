
import { Injectable } from '@angular/core';

import {Observable} from 'rxjs';
import {HttpClient } from '@angular/common/http'
import { User } from 'app/class/user/user';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  
  constructor(private _http : HttpClient) { }

  public loginUserFromRemote(user : User):Observable<any>{
    return this._http.post<any>("http://localhost:8080/login",user);
  }
  
  public resgisterAsUser(user : User):Observable<any>{
    return this._http.post<any>("http://localhost:8080/signup",user)
}
}
