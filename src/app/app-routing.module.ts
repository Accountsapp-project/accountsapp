import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component'
import { FrontComponent } from './components/front/front.component';
import { HomePage } from './home/home.page';
import { SignupComponent } from './components/signup/signup.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileeditComponent } from './components/profileedit/profileedit.component';
import { GroupComponent } from './components/group/group.component';
import { AddpeopleComponent } from './components/addpeople/addpeople.component';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {path : 'home' ,component:HomePage},
  {path : 'login',component:LoginComponent},
  {path : 'front',component:FrontComponent},
  {path : 'signup',component:SignupComponent},
  {path: 'mainpage',component:MainpageComponent},
  {path : 'profile',component:ProfileComponent},
  {path : 'profileedit',component:ProfileeditComponent},
  {path : 'group',component:GroupComponent},
  {path : 'addpeople',component:AddpeopleComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
