import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "@environments/environment";
import { ResponseBase, ResponseBaseWithData } from "@app/shared/classes/response-base";
import { Vehicle } from "../models/vehicle.model";

@Injectable()
export class VehicleService {

  private api: string = environment.apiUrl + '/vehicle';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<ResponseBaseWithData<Vehicle[]>> {
    return this.http.get<any>(`${this.api}`);
  }

  create(model: any): Observable<ResponseBase> {
    return this.http.post<any>(`${this.api}`, model);
  }

}
