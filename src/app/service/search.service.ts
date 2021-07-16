import { HttpParams,HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/class/user/user';
import {BehaviorSubject} from 'rxjs';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  
  constructor(private _http : HttpClient) { }
  params = null
  private content = new BehaviorSubject<string>("default value");
  public shared = this.content.asObservable();

  updateData(text){
    this.content.next(text);
    this.params = new HttpParams()
    .set("searchbar",this.content.value)
  }

  a:Array<string>=[]
  public searchbarUser():Observable<any>{
    return this._http.get<any>("http://localhost:8090/mainpage",{params : this.params})
  }

  private userListcontent=new BehaviorSubject<Array<string>>(this.a)
  public sharedUser=this.userListcontent.asObservable();
  
  updateUserList(a)
  {
    this.userListcontent.next(a);
    console.log(this.userListcontent)
  }
  

  

  




}
