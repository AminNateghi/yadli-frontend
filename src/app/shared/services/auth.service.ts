import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "@environments/environment";
import { ResponseBaseWithData } from "@app/shared/classes/response-base";
import { Login } from "../models/login.model";
import { Register } from "../models/register.model";

@Injectable()
export class AuthService {

  private api: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  login(model: Login): Observable<ResponseBaseWithData<any>> {
    return this.http.post<ResponseBaseWithData<any>>(`${this.api}/auth/login`, model);
  }

  register(model: Register): Observable<ResponseBaseWithData<any>> {
    return this.http.post<ResponseBaseWithData<any>>(`${this.api}/auth/register`, model);
  }

}