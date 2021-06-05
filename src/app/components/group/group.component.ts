import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'app/class/user/user';
import { RegistrationService } from 'app/service/registration.service';
import { SearchService } from 'app/service/search.service';
import { from } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { MainpageComponent} from '../mainpage/mainpage.component';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent implements OnInit {
  selectedUser:Array<User>;
  constructor(private router:Router,private searchService:SearchService) { }
  groupname:string
  description:string
  ngOnInit() {
      this.searchService.sharedUser.subscribe(
        data=>{
          this.selectedUser = data
        }
      )
  }

  gotoaddpeople(){
    this.router.navigate(["addpeople"]);
  }

  gotomainpage(){
    this.router.navigate(["mainpage"]);
  }

}
