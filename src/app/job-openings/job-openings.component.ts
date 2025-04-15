import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-openings',
  imports: [],
  templateUrl: './job-openings.component.html',
  styleUrl: './job-openings.component.css'
})
export class JobOpeningsComponent {
  constructor(private router:Router){}

}
