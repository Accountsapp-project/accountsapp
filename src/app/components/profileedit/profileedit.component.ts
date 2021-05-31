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
  user = new User();

  constructor(private router:Router, private _reg_service : RegistrationService) {
   }

  ngOnInit() {
    this._reg_service.shared.subscribe(
      data =>{
        this.user.username = data
      }
  )
  }

gotoprofile(){
  this.router.navigate(['profile'])
}  

gotomainpage(){
  this._reg_service.updatenewpassword(this.newpassword)
  this.router.navigate(['mainpage'])

}
}
