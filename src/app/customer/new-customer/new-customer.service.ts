import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddOrEditCustomer } from '../models/AddOrEditCustomer';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewCustomerService {

  constructor(private http: HttpClient) {

   }
   saveCustomer(data: AddOrEditCustomer): Observable<Response> {
    data.id = undefined;
    return this.http.post(`${environment.urlService}/customer`, data)
    .pipe(
      map((response: any) => response));
  }
}
