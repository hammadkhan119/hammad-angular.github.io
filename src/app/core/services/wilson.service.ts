import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Customer} from 'src/app/shared/models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class WilsonService {

  constructor(private http: HttpClient) {

  }
  validateCustomer(data: Customer): Observable<any> {
    return this.http.post<any>('/api/customer/login-customer', data);
    //return this.http.post<any>('/api/employee/test-employee', {});
  }
  getCustomerProducts(): Observable<any> {
    return this.http.post<any>('/api/customer/customer-products',{});
  }
}
