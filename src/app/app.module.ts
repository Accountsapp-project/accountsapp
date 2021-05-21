import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {LoginComponent} from './components/login/login.component'
import {FrontComponent} from './components/front/front.component'
import {SignupComponent} from './components/signup/signup.component'
@NgModule({
  declarations: [AppComponent,LoginComponent,FrontComponent,SignupComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,RouterModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
