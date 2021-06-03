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
  public selectedUser :Array<User> =[]
  constructor(private _router:Router,private searchService:SearchService) { }
 
  ngOnInit() {}
  public userList:Array<User>;
  gotoCreateGroup(){
    this._router.navigate(['group'])
  }

  selectMember(item){
    this.showSelected = false
    if(!this.selectedUser.find(i => i.username === item.username)){
      this.selectedUser.push(item)
    }
    console.log(this.selectedUser)
  
  }
  selected(item){
    if(this.selectedUser.find(i => i.username === item.username)){
       return false
    }
    else{
      return true
    }
  }
  ionchange(event){
    this.showSearch = !this.showSearch 
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
