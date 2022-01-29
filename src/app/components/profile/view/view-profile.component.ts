import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router,
    private sharedService: SharedService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.sharedService.toolbarState.next({ title: 'Profile' });
    this.getData();
  }

  getData() {
    this.userService.info().subscribe(result => {
      if (result.success) {
        this.user = result.data;
      }
    })
  }

  editClick() {
    this.router.navigate(['profile', 'edit']);
  }

  signoutClick() {
    localStorage.clear();
    this.router.navigate(['']);
  }
}