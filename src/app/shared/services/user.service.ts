import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "@environments/environment";
import { ResponseBaseWithData } from "@app/shared/classes/response-base";
import { UserInfo } from "../models/user-info.model";

@Injectable()
export class UserService {

  private api: string = environment.apiUrl + '/users';

  constructor(
    private http: HttpClient
  ) { }

  info(): Observable<ResponseBaseWithData<UserInfo>> {
    return this.http.get<any>(`${this.api}/info`);
  }

}
