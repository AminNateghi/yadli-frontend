import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/services/shared.service';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {

  list: KeyValue<string, string>[] = [];

  constructor(
    private sharedService: SharedService,
  ) { }

  ngOnInit(): void {
    this.sharedService.toolbarState.next({ title: 'Design system' });

    this.list.push({ key: 'volvo', value: 'Volvo' });
    this.list.push({ key: 'bmw', value: 'BMW' });
  }

  openModal() {

  }
}