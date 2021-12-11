import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {

  constructor(
    private sharedService: SharedService,
  ) { }

  ngOnInit(): void {
    this.sharedService.toolbarState.next({ title: 'Design system' });
  }
}