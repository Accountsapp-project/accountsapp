import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'app/class/user/user';
import { RegistrationService } from 'app/service/registration.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  user = new User();
  constructor(private _router:Router,private _reg_service:RegistrationService) { }
  showPassword =false;
  passwordIcon = "eye";
  ngOnInit() {}
  gotoLogin(){
     this._reg_service.resgisterAsUser(this.user).subscribe(
       data =>{
            console.log("data sent");
            this._router.navigate(['login']);
       },
       error =>{
            console.log("data not sent")
       }
     )
    
  }
  gotoFront(){
    this._router.navigate(['front'])
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
