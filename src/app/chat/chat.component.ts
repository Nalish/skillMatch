import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  imports: [],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  constructor(private router:Router){}
  navigateToCareerPath(){
    {
  this.router.navigate(['/career-path'])
    }
  }
  navigateToChatBox(){
    {
  this.router.navigate(['/chat'])
    }
  }
  navigateToNotifications(){
    {
  this.router.navigate(['/notifications'])
    }
  }
}
