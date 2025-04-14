import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ViewCandidateComponent } from './view-candidate/view-candidate.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { JobApplicationsComponent } from './job-applications/job-applications.component';
import { JobseekerProfileComponent } from './jobseeker-profile/jobseeker-profile.component';
import { CareerPathComponent } from './career-path/career-path.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },//the default page
    {path:'home',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'application-form',component:ApplicationFormComponent},
    {path:'view-candidate',component:ViewCandidateComponent},
    {path:'job-applications',component:JobApplicationsComponent},
    {path:'jobseeker-profile',component:JobseekerProfileComponent},
    {path:'career-path',component:CareerPathComponent}


];

