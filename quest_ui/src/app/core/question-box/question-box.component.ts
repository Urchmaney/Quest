import { Component } from '@angular/core';
import { faComment, faLightbulb, faExternalLink, faAdd } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-question-box',
  templateUrl: './question-box.component.html',
  styleUrls: ['./question-box.component.scss']
})
export class QuestionBoxComponent {
  faComment = faComment;
  faLightbulb = faLightbulb;
  faExternalLink = faExternalLink;
  faAdd = faAdd;

}
