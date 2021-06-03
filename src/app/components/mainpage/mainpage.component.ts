import { ThrowStmt } from '@angular/compiler';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { User } from 'app/class/user/user';
import { RegistrationService } from 'app/service/registration.service';
import { SearchService } from 'app/service/search.service';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
})
export class MainpageComponent implements OnInit {
 
  constructor(private router : Router ,private menu:MenuController,private _req_service:RegistrationService,
              private searscService : SearchService) { }
  
  public userList:Array<User>;
  showSearch = true
  showTitle = false
  ngOnInit() {}
  gotoprofile()
  { 
    this._req_service.fetchUserData().subscribe(
      data=>{
        this._req_service.updateUser(data);
        console.log(data)
      },
      error =>{
        console.log("failed")
      }
    );
    this.router.navigate(['profile']);
  }
  gotogroup(){
    this.router.navigate(['group'])
  } 

  openMenu(){
    this.menu.enable(true,'mainpage-menu');
    this.menu.open('mainpage-menu')
  }

  openSearch(){
    this.showSearch = !this.showSearch
    this.showTitle = !this.showTitle
  }

  ionchange(event){
    console.log(event.detail.value)
    this.searscService.updateData(event.detail.value);
    this.searscService.searchbarUser().subscribe(
      data =>{
          this.userList = data
          console.log(this.userList)
          console.log("search success for "+event.detail.value)
      },
      error =>{
          console.log("search failer")
      }
    )
  }
}
