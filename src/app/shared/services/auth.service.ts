import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "@environments/environment";
import { ResponseBase, ResponseBaseWithData } from "@app/shared/classes/response-base";
import { Login } from "../models/login.model";
import { Register } from "../models/register.model";

@Injectable()
export class AuthService {

  private api: string = environment.apiUrl + '/auth';

  constructor(
    private http: HttpClient
  ) { }

  login(model: Login): Observable<ResponseBaseWithData<any>> {
    return this.http.post<ResponseBaseWithData<any>>(`${this.api}/login`, model);
  }

  register(model: Register): Observable<ResponseBaseWithData<any>> {
    return this.http.post<ResponseBaseWithData<any>>(`${this.api}/register`, model);
  }

  verify(token: string): Observable<ResponseBase> {
    return this.http.post<any>(`${this.api}/verify`, token);
  }

}
