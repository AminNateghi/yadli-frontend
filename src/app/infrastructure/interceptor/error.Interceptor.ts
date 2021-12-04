import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private notify: ToastrService,
    private router: Router
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      let error: any;

      if (err.status === 400) {
        error = err.error.message ?? 'Wrong data header request';
      } else if (err.status === 401) {
        error = 'You do not have access to this section';
        this.router.navigate(['/login']);
      } else if (err.status === 0) {
        error = 'Error connecting to server!';
      }
      this.notify.error(error);
      return throwError(error);
    }));
  }
}
