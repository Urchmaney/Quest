import { Component } from '@angular/core';
import { faThLarge, faBars, faArrowDown, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faThLarge = faThLarge;
  faBars = faBars;
  faArrowDown = faArrowDown;
  faPlus = faPlus;
}
