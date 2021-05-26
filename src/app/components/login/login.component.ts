import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'app/class/user/user';
import { RegistrationService } from 'app/service/registration.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user=new User();
  constructor(private _router :Router,private _reg_service : RegistrationService) { }
  ngOnInit() {}

  showPassword =false;
  passwordIcon = "eye";
    gotofront(){
      this._router.navigate(['front'])
    }
    gotomainpage()
    {
      //this._router.navigate(['mainpage']);
      this._reg_service.loginUserFromRemote(this.user).subscribe(
        data =>{
        console.log("You have Logged in");
        this._router.navigate(['mainpage']);
      },
        error =>{
          console.log("Error: You have not logged in.")
        }
      )
    }
    
    showPasswordIcon(){
      this.showPassword = !this.showPassword;
      if (this.passwordIcon == 'eye') {
        this.passwordIcon = 'eye-off';
      }
      else{
        this.passwordIcon = 'eye';
      }
    }
    
}
