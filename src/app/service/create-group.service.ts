import { HttpClient ,HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Group } from 'app/class/group';
import { User } from 'app/class/user/user';
import { Observable} from 'rxjs';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CreateGroupService {
  group = new Group()
  constructor(private _http:HttpClient) { }
  userList : Array<string> = []
  private SelecteduserListcontent=new BehaviorSubject<Array<string>>(this.userList)
  public sharedSelectedUser=this.SelecteduserListcontent.asObservable();
  userListParam = null
  updateUserList(a)
  {
    this.SelecteduserListcontent.next(a);
    this.userListParam= new HttpParams();
    this.SelecteduserListcontent.value.forEach((user:string) =>{
      this.userListParam = this.userListParam.append('userlist', user);
    })
     
     
  }
  

  // private groupContent = new BehaviorSubject<Group>(this.group)
  // public sharedGroup = this.groupContent.asObservable()
   
  // updateGroup(group){
  //   this.groupContent.next(group)
  // }

  public createGroup(group:Group):Observable<any>{
    return this._http.post<any>("http://localhost:8090/group/update",group,{params : this.userListParam})
  }
}
