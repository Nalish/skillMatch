import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
constructor(private router:Router){}
navigateToLogin(){
  setTimeout(()=>{
this.router.navigate(['/login'])
  },1000)
}
}
