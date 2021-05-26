import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'app/class/user/user';
import { RegistrationService } from 'app/service/registration.service';
import * as EventEmitter from 'events';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user=new User();
  constructor(private _router :Router,private _reg_service : RegistrationService) { }
  ngOnInit() {}

  $isLoggedIn=new EventEmitter();
  showPassword =false;
  passwordIcon = "eye";
    gotofront(){
      this._router.navigate(['front'])
    }
    
    gotomainpage(){
      this._reg_service.gotomainpage();
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
