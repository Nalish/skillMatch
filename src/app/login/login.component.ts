import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  selectedRole: 'jobseeker' | 'employer' = 'jobseeker'; // default
  username = '';
  password = '';

  constructor(private router: Router) {}

  // Called when user clicks either role button
  setRole(role: 'jobseeker' | 'employer') {
    this.selectedRole = role;
  }

  // Called on clicking Login
  login() {
    if (!this.username || !this.password) {
      alert('Please enter your username and password.');
      return;
    }

    // You can plug in actual auth logic here

    if (this.selectedRole === 'jobseeker') {
      this.router.navigate(['/jobseeker-profile']);
    } else {
      this.router.navigate(['/employer-profile']);
    }
  }

  // Called on clicking "Signup"
  navigateToSignup() {
    setTimeout(() => {
      this.router.navigate(['/signup']);
    }, 1000);
  }
}
