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

  loginForm: FormGroup = new FormGroup({});

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
    this.loginForm = new FormGroup({
      inputUserName: new FormControl('', [Validators.required, Validators.email]),
      inputPassword: new FormControl('', [Validators.required]),
    });
  }

  loginClick() {
    if (!this.loginForm.valid) {
      this.notify.error('Fill all items.');
      return;
    }

    this.spinner.show();
    this.authService.login({
      email: this.loginForm.controls.inputUserName.value.trim(),
      password: this.loginForm.controls.inputPassword.value
    }).toPromise().then((result) => {
      if (result.success) {
        localStorage.setItem('token', result.data);
        this.router.navigate(['home']);
      } else {
        this.notify.info('Wrong data!');
      }
    }).finally(() => {
      this.spinner.hide();
    });

  }

  registerClick() {
    this.router.navigate(['register']);
  }

}
