import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
constructor(private router:Router){}

navigateToLogin(){
  setTimeout(()=>{
this.router.navigate(['/login'])
  },1000)
}

navigateToSignup(){
  setTimeout(()=>{
this.router.navigate(['/signup'])
  },1000)
}
}
