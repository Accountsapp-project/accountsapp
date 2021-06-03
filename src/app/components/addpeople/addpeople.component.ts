import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addpeople',
  templateUrl: './addpeople.component.html',
  styleUrls: ['./addpeople.component.scss'],
})
export class AddpeopleComponent implements OnInit {
  showSearch = true
  showTitle = false
  constructor() { }

  ngOnInit() {}
  openSearch(){
    this.showSearch = !this.showSearch
    this.showTitle = !this.showTitle
  }

}
