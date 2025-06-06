import { Component } from '@angular/core';
import { Router } from '@angular/router';


interface Notification {
  title: string;
  timeAgo: string;
  logo: string;
}
@Component({
  selector: 'app-notification-page',
  imports: [],
  templateUrl: './notification-page.component.html',
  styleUrl: './notification-page.component.css'
})
export class NotificationPageComponent {

  constructor(private router:Router){}
  notifications: Notification[] = [
    {
      title: 'Interview with Innotech Software',
      timeAgo: '3d ago',
      logo: 'assets/logos/innotech.png'
    },
    {
      title: 'Interview confirmed for Project Zenith',
      timeAgo: '1w ago',
      logo: 'assets/logos/zenith.png'
    },
    {
      title: 'Interview scheduled with Global Software Company',
      timeAgo: '2w ago',
      logo: 'assets/logos/globalsoft.png'
    },
    {
      title: 'Interview at InnoTech Software',
      timeAgo: '1mo ago',
      logo: 'assets/logos/innotech.png'
    },
    {
      title: 'Interview confirmed for Project Zenith',
      timeAgo: '2mo ago',
      logo: 'assets/logos/zenith.png'
    },
    {
      title: 'Interview scheduled with Global Software Company',
      timeAgo: '3mo ago',
      logo: 'assets/logos/globalsoft.png'
    }
  ];
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
