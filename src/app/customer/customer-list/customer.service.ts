import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {

  }

  getCustomerList(page: number, rows: number): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${environment.urlService}/customer/GetPaginatedCustomer/${page}/${rows}`);
  }
}
