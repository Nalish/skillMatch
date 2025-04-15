import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-candidate',
  imports: [CommonModule],
  templateUrl: './view-candidate.component.html',
  styleUrl: './view-candidate.component.css'
})
export class ViewCandidateComponent {
constructor(private router:Router){}

navigatetoJobOpenings(){
  this.router.navigate(['./job-openings'])
}
navigatetoViewCandidate(){
  this.router.navigate(['./view-candidate'])
}
navigatetoScheduleInterview(){
  this.router.navigate(['./schedule-interview'])
}
navigateToChatBox(){
   this.router.navigate(['/chat'])
}

}
