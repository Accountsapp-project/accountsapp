import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'app/class/user/user';
import { RegistrationService } from 'app/service/registration.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-profileedit',
  templateUrl: './profileedit.component.html',
  styleUrls: ['./profileedit.component.scss'],
})
export class ProfileeditComponent implements OnInit {
  newpassword:string;
  newUsername:string; 
  tempUsername:string;
  user = new User();
  msg = ""
  constructor(private router:Router, private _reg_service : RegistrationService) {
   }

  ngOnInit() {
    this._reg_service.shared.subscribe(
      data =>{
        this.user.username = data
        console.log(this.user.username)
      }
    )
  }

gotoprofile(){
  this.router.navigate(['profile'])
}  

gotomainpage(){
  this._reg_service.updatenewUsernameAndPass(this.newUsername,this.newpassword)
  this._reg_service.resetpassword(this.user).subscribe(
    data =>{
      console.log(data)
      this.router.navigate(['mainpage'])
    },
    error =>{
      console.log("password not changed")
      console.log(this.user.password)
      this.msg = "incorrect password"
    }
  )
  this._reg_service.updateData(this.newUsername)

}
}
