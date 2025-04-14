import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ViewCandidateComponent } from './view-candidate/view-candidate.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },//the default page
    {path:'home',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'view-candidate',component:ViewCandidateComponent},
];

