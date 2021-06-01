
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
  newpasswordParam=null
 
  private stringContent = new BehaviorSubject<string>("default value");
  public shared= this.stringContent.asObservable();

  private newpwdcontent=new BehaviorSubject<string>("default pwd");
  public sharedpwd=this.newpwdcontent.asObservable();
  
  private newUsernamecontent=new BehaviorSubject<string>("default username");
  public sharedUsername=this.newUsernamecontent.asObservable();

  private behUser = new BehaviorSubject<User>(this.user);
  public sharedUser = this.behUser.asObservable();
   
  updateUser(user){
    this.behUser.next(user);
  }
  updatenewUsernameAndPass(username,password){
    this.newpwdcontent.next(password);
    this.newUsernamecontent.next(username)
    this.newpasswordParam = new HttpParams()
    .set('newpassword',this.newpwdcontent.value)
    .set('newusername',this.newUsernamecontent.value)
    
  }

  updateData(text){
    this.stringContent.next(text);
    this.usernameParam = new HttpParams()
    .set('username',this.stringContent.value)
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

  public resetpassword(user:User):Observable<any>{
    return this._http.post<any>("http://localhost:8090/profileedit",user,{params:this.newpasswordParam})
  }
}
