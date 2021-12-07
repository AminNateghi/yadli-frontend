import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '@app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    private router: Router,
    private notify: ToastrService,
    private spinner: NgxSpinnerService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.initField();
  }

  initField() {
    this.form = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  loginClick() {
    if (!this.form.valid) {
      this.notify.error('Fill all items.');
      return;
    }

    this.spinner.show();
    this.authService.login({
      email: this.form.controls.userName.value.trim(),
      password: this.form.controls.password.value
    }).toPromise().then((result) => {
      if (result.success) {
        localStorage.setItem('token', result.data);
        this.router.navigate(['home']);
      } else {
        localStorage.removeItem('token');
        this.notify.info(result.message);
      }
    }).finally(() => {
      this.spinner.hide();
    });

  }

  registerClick() {
    this.router.navigate(['register']);
  }

}
