import { Component, OnInit } from '@angular/core';
import { Toolbar } from '@app/shared/classes/toolbar';
import { SharedService } from '@app/shared/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toolbarState = new Toolbar;

  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.sharedService.toolbarState.subscribe(result => {
      setTimeout(() => {
        this.toolbarState = result;
      }, 50);
    });
  }

}
