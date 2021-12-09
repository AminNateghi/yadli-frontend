import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "@environments/environment";
import { ResponseBase, ResponseBaseWithData } from "@app/shared/classes/response-base";
import { UserInfo } from "../models/user-info.model";
import { UserUpdate } from "../models/user-update.model";

@Injectable()
export class UserService {

  private api: string = environment.apiUrl + '/users';

  constructor(
    private http: HttpClient
  ) { }

  info(): Observable<ResponseBaseWithData<UserInfo>> {
    return this.http.get<any>(`${this.api}/info`);
  }

  update(model: UserUpdate): Observable<ResponseBase> {
    return this.http.put<any>(`${this.api}`, model);
  }

}
