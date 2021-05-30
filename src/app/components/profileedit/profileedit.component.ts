import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'app/class/user/user';
import { ProedService } from 'app/service/proed.service';
import { RegistrationService } from 'app/service/registration.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-profileedit',
  templateUrl: './profileedit.component.html',
  styleUrls: ['./profileedit.component.scss'],
})
export class ProfileeditComponent implements OnInit {

  user = new User();

  constructor(private router:Router, private _reg_service : RegistrationService,private _proed : ProedService) {
   }

  ngOnInit() {
    this._proed.share.subscribe(
      data =>{
        this.user.username = data
      }
  )

  }


gotoprofile(){
  this.router.navigate(['profile'])
}  

gotomainpage(){
  this.router.navigate(['mainpage'])
}
}
