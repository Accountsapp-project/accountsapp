import { Injectable } from '@angular/core';
import {BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProedService {
  private content=new BehaviorSubject <string> ("Default")
  public share = this.content.asObservable();
  constructor() { }
  updateData(text){
    this.content.next(text)
  }
}
