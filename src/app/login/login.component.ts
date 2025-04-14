import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
constructor(private router:Router){}
navigateToSignup(){
  setTimeout(()=>{
this.router.navigate(['/signup'])
  },1000)
}
navigateToJobSeekerProfile(){
  setTimeout(()=>{
this.router.navigate(['/view-candidate'])
  },1000)
}
}
