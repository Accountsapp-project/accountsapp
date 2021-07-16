import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Group } from 'app/class/group';
import { User } from 'app/class/user/user';
import { CreateGroupService } from 'app/service/create-group.service';
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
  selectedUser:Array<string>;
  constructor(private router:Router,private searchService:SearchService,private creategroupService : CreateGroupService) { }
  group = new Group()

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
  
  createGroup(){
    this.group.status = "active"
    console.log("group status"+this.group.status)
    this.creategroupService.updateUserList(this.selectedUser)
    this.creategroupService.createGroup(this.group).subscribe(
      data =>{
      
          this.router.navigate(['mainpage'])
      },
      error =>{
          console.log("error"+error)
      
      }
    )
   
  }
}
