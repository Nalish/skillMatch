import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-employer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard-employer.component.html',
  styleUrls: ['./dashboard-employer.component.css']
})
export class DashboardEmployerComponent {
constructor(private router:Router){}

  postedJobs = 120;
  applications = 450;
  interviews = 30;
  hires = 15;

  navigatetoJobOpenings(){
    this.router.navigate(['./job-openings'])
  }
}
