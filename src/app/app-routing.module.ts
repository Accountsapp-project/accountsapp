import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component'
import { FrontComponent } from './components/front/front.component';
import { HomePage } from './home/home.page';
import { SignupComponent } from './components/signup/signup.component';
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
  {path : 'signup',component:SignupComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
