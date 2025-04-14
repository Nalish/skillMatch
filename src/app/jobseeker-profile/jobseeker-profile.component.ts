import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobseeker-profile',
  imports: [CommonModule,FormsModule],
  templateUrl: './jobseeker-profile.component.html',
  styleUrl: './jobseeker-profile.component.css'
})
export class JobseekerProfileComponent {

  constructor(private router:Router){}
  jobRole = '';
  experience = '';
  keySkills: string[] = [];
  newSkill = '';
  expertise = '';

  jobStatus = true;
  openToOpportunities = false;
  remoteFriendly = true;
  speakingInterests = false;

  addSkill() {
    if (this.newSkill.trim()) {
      this.keySkills.push(this.newSkill.trim());
      this.newSkill = '';
    }
  }

  removeSkill(index: number) {
    this.keySkills.splice(index, 1);
  }

  saveProfile() {
    const profile = {
      jobRole: this.jobRole,
      experience: this.experience,
      keySkills: this.keySkills,
      expertise: this.expertise,
      jobStatus: this.jobStatus,
      openToOpportunities: this.openToOpportunities,
      remoteFriendly: this.remoteFriendly,
      speakingInterests: this.speakingInterests
    };
    console.log('Profile saved:', profile);
  }
  navigateToCareerPath(){
    {
  this.router.navigate(['/career-path'])
    }
  }
}

