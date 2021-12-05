import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '@app/shared/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignUpComponent implements OnInit {

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
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  registerClick() {
    if (!this.form?.valid) {
      this.notify.error('Fill all items.')
      return;
    }

    this.spinner.show();
    this.authService.register({
      name: this.form.controls.name.value.trim(),
      email: this.form.controls.email.value.trim(),
      password: this.form.controls.password.value
    }).toPromise().then((result) => {
      if (result.success) {
        this.notify.success('Welcome');
        this.router.navigate(['home']);
      } else {
        this.notify.info(result.message);
      }
    }).finally(() => {
      this.spinner.hide();
    });

  }

  loginClick() {
    this.router.navigate(['login']);
  }
}
