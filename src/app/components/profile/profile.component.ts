import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'app/class/user/user';
import { RegistrationService } from 'app/service/registration.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user=new User();
  constructor(private router:Router,private _reg_service : RegistrationService) { }

  ngOnInit() {
    // this._reg_service.sharedUsername.subscribe(
    //   data =>{
    //     this.user.username = data
    //     console.log(this.user.username)
    //   }
    // )
    this._reg_service.sharedUser.subscribe(
        data =>{
          this.user = data
        }
    )
  }

  
 
gotomainpage(){
  this.router.navigate(["mainpage"]);
}
gotoprofileedit()
{
  this.router.navigate(["profileedit"]);
}
}
