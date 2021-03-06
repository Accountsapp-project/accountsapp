import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {LoginComponent} from './components/login/login.component'
import {FrontComponent} from './components/front/front.component'
import {SignupComponent} from './components/signup/signup.component'
import { FormsModule } from '@angular/forms';
import {MainpageComponent} from './components/mainpage/mainpage.component'
import { ProfileComponent } from './components/profile/profile.component';
import {ProfileeditComponent}from './components/profileedit/profileedit.component';
import { MainpagemenuComponent } from './components/mainpagemenu/mainpagemenu.component';
import { GroupComponent } from './components/group/group.component';
import { AddpeopleComponent } from './components/addpeople/addpeople.component';
@NgModule({
  declarations: [AppComponent,LoginComponent,FrontComponent,SignupComponent,MainpageComponent,ProfileComponent,MainpagemenuComponent,ProfileeditComponent,GroupComponent,AddpeopleComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,RouterModule,HttpClientModule,FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
