import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vehicle-box',
  templateUrl: './vehicle-box.component.html',
  styleUrls: ['./vehicle-box.component.scss']
})
export class YlVehicleBoxComponent {

  @Input() title = 'Title';
  @Input() description = 'Description';
  @Input() circleCaption = '0';

}
