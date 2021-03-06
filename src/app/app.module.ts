import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JwtInterceptor } from './infrastructure/interceptor/jwt.Interceptor';
import { LayoutEmptyComponent } from './infrastructure/layouts/layout-empty/layout-empty.component';
import { LayoutMainComponent } from './infrastructure/layouts/layout-main/layout-main.component';
import { FooterComponent } from './shared/modules/footer/footer.component';
import { HeaderComponent } from './shared/modules/header/header.component';

@NgModule({
  declarations: [
    LayoutEmptyComponent,
    LayoutMainComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({
      timeOut: 7000,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
