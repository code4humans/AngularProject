import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddOrEditCustomer } from '../models/AddOrEditCustomer';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EditCustomerService {

  constructor(private http: HttpClient) { }

  getCustomerById(int: number): Observable<AddOrEditCustomer>{
    return this.http.get<AddOrEditCustomer>(`${environment.urlService}/customer/${int}`);
  }

  editCustomer(data: AddOrEditCustomer): Observable<Response> {
    return this.http.put(`${environment.urlService}/customer`, data)
    .pipe(
      map((response: any) => response));
  }
}
