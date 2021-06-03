import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'app/class/user/user';
import { RegistrationService } from 'app/service/registration.service';
import { from } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { MainpageComponent} from '../mainpage/mainpage.component';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent implements OnInit {

  constructor(private router:Router,private _reg_service : RegistrationService) { }

  ngOnInit() {}

  gotoaddpeople(){
    this.router.navigate(["addpeople"]);
  }

}
