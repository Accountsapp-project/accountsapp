import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss'],
})
export class MainpageComponent implements OnInit {
 
  constructor(private router : Router ,private menu:MenuController) { }
  
  showSearch = true
  showTitle = false
  ngOnInit() {}
  gotoprofile()
  {
    this.router.navigate(['profile']);
  }

  openMenu(){
    this.menu.enable(true,'mainpage-menu');
    this.menu.open('mainpage-menu')
  }

  openSearch(){
    this.showSearch = !this.showSearch
    this.showTitle = !this.showTitle
  }
}
