import { Component } from '@angular/core';
import { faBriefcase, faUsers, faCog, faCodeFork, faSignOut } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  faBriefcase = faBriefcase;
  faUsers = faUsers;
  faCog = faCog;
  faCodeFork = faCodeFork;
  faSignOut = faSignOut;
}
