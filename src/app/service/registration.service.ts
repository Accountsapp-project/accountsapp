
import { Injectable } from '@angular/core';

import { Observable} from 'rxjs';
import {HttpClient,HttpParams } from '@angular/common/http'
import { User } from 'app/class/user/user';
import {BehaviorSubject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  user=new User();

  constructor(private _http : HttpClient) { }
  usernameParam = null
 
  private behuserName = new BehaviorSubject<string>("default value");
  public sharedUsername = this.behuserName.asObservable();

  private behUser = new BehaviorSubject<User>(this.user);
  public sharedUser = this.behUser.asObservable();
   
  updateUser(user){
    this.behUser.next(user);
  }

  updateData(text){
    this.behuserName.next(text);
    this.usernameParam = new HttpParams()
    .set('username',this.behuserName.value)
  }
 
  public loginUserFromRemote(user : User):Observable<any>{
    return this._http.post<any>("http://localhost:8090/login",user);
  }
   
  public fetchUserData():Observable<any>{
    return this._http.get<any>("http://localhost:8090/profile",{params : this.usernameParam})
  }

  

  public resgisterAsUser(user : User):Observable<any>{
    return this._http.post<any>("http://localhost:8090/signup",user)
}
}
