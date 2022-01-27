import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class YlHeadingComponent {

  @Input() title = 'متن عنوان';
  @Input() description = '';
  @Input() hasDescription = false;
  @Input() hasSeparatorLine = false;

}
