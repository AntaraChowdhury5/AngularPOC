import { Component, Input } from '@angular/core';
import { AuthServiceService } from '../../service/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isOpen = false;
  isLoggedIn: boolean = false;
  constructor(private authService: AuthServiceService) {}

  ngOnInit() {
    this.authService.eventEmitter.subscribe(val=>{
      this.isLoggedIn=val;
    });
  }
  profilePopUP() {
    this.isOpen = !this.isOpen;
  }
}
