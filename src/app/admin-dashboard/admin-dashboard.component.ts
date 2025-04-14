import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  imports:[CommonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  stats = [
    { label: 'Total Users', value: '256,780' },
    { label: 'Job Postings', value: '3,400' },
    { label: 'Successful Matches', value: '8192' },
    { label: 'Registered Companies', value: '30' }
  ];

  users = [
    { name: 'Josh Smith', role: 'admin' },
    { name: 'Loyce Kalume', role: 'jobseeker' },
    { name: 'Carol Mwangi', role: 'employer' }
  ];

  jobs = [
    { title: 'Full Stack', company: 'The Jitu', status: 'Active' },
    { title: 'QA', company: 'Griffins', status: 'Pending' },
    { title: 'Software Dev', company: 'Teach2Give', status: 'Active' }
  ];
}
