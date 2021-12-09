import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { SharedService } from '@app/shared/services/shared.service';
import { UserService } from '@app/shared/services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    private sharedService: SharedService,
    private notify: ToastrService,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.sharedService.toolbarState.next({ title: 'Edit profile' });
    this.initFields();
    this.getData();
  }

  initFields() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl(''),
      mobile: new FormControl(''),
    })
  }

  getData() {
    this.userService.info().subscribe(result => {
      if (result.success) {
        this.form.patchValue(result.data);
      }
    })
  }

  saveClick() {
    if (!this.form.valid) {
      this.notify.warning('Please fill add fields.');
      return;
    }

    this.userService.update(this.form.value).subscribe(result => {
      if (result.success) {
        this.notify.success('Profile updated.');
        this.router.navigate(['profile', 'view']);
      } else {
        this.notify.error(result.message);
      }
    });
  }
}