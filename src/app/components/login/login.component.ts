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

  constructor(private _router :Router,private _reg_service : RegistrationService) { }
  user = new User();
  ngOnInit() {}

  showPassword =false;
  passwordIcon = "eye";
    gotofront(){
      this._router.navigate(['front'])
    }
    gotomainpage()
    {
      this._reg_service.loginUserFromRemote(this.user).subscribe(
        data =>{
          console.log("logged in");
          this._router.navigate(['mainpage']);
        },
        error =>{
            console.log("not logged in");
        }
      )
    }
  

}
