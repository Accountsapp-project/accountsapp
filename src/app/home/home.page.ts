import { Component } from '@angular/core';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  constructor(private _router:Router) {}
   
  gotoFront(){
    this._router.navigate(['front']);
}
}
