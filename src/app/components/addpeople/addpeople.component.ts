import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'app/class/user/user';
import { SearchService } from 'app/service/search.service';

@Component({
  selector: 'app-addpeople',
  templateUrl: './addpeople.component.html',
  styleUrls: ['./addpeople.component.scss'],
})
export class AddpeopleComponent implements OnInit {
  showSearch = true
  showSelected = true
  public selectedUser :Array<string> =[]
  constructor(private _router:Router,private searchService:SearchService) { }
 
  ngOnInit() {}
  public userList:Array<User>;
  gotoCreateGroup(){
    this._router.navigate(['group'])
  }

  
  selectOrDelete(item)
  {
    this.showSelected = false  
    if(this.selectedUser.find(i => i === item.username))
    {
      var userIndex = this.selectedUser.indexOf(item.username);
      this.selectedUser.splice(userIndex,1);  
    }
    else{
      this.selectedUser.push(item.username);
    }
  }
  returnList() 
  {
    this.searchService.updateUserList(this.selectedUser)
    this._router.navigate(['group'])
  }
  selected(item){
    if(this.selectedUser.find(i => i === item)){
       return false
    }
    else{
      return true
    }
  }
  ionchange(event){
    this.showSearch = false 
    console.log(event.detail.value)
    this.searchService.updateData(event.detail.value);
    this.searchService.searchbarUser().subscribe(
      data =>{
        this.userList = data
        console.log("search success for "+event.detail.value)
      },
      error =>{
          console.log("search failer")
      }
    )
  }

}
