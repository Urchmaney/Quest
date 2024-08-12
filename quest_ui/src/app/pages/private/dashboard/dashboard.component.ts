import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthComponent } from '../auth_component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends AuthComponent {

  projects = ["", "", "", "", "", "", ""]
  constructor(router: Router) {
    super(router);
  }
}
