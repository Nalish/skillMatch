import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { JobseekerProfileComponent } from './jobseeker-profile/jobseeker-profile.component';
import { NotificationPageComponent } from './notification-page/notification-page.component';
import { ChatComponent } from './chat/chat.component';
import { CareerPathComponent } from './career-path/career-path.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { JobOpeningsComponent } from './job-openings/job-openings.component';
import { AddJobOpeningComponent } from './add-job-opening/add-job-opening.component';
import { JobApplicationsComponent } from './job-applications/job-applications.component';
import { ViewCandidateComponent } from './view-candidate/view-candidate.component';
import { ScheduleInterviewComponent } from './schedule-interview/schedule-interview.component';

@Component({  
  selector: 'app-root',
  imports: [RouterOutlet,HomeComponent,LoginComponent,SignupComponent,ApplicationFormComponent,JobseekerProfileComponent,NotificationPageComponent,ChatComponent,CareerPathComponent,AdminDashboardComponent,ManageUsersComponent,JobOpeningsComponent,AddJobOpeningComponent,JobApplicationsComponent,ViewCandidateComponent,ScheduleInterviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'JobQuest';
}
