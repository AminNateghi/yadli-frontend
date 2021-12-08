import { Component, OnInit } from '@angular/core';
import { UserInfo } from '@app/shared/models/user-info.model';
import { SharedService } from '@app/shared/services/shared.service';
import { UserService } from '@app/shared/services/user.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {

  user: UserInfo = new UserInfo();

  constructor(
    private sharedService: SharedService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.sharedService.toolbarState.next({ title: 'YADLI', showMenuButton: true });
    this.getData();
  }

  getData() {
    this.userService.info().subscribe(result => {
      if (result.success) {
        this.user = result.data;
      }
    })
  }
}