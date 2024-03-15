import { Injectable } from '@angular/core';
import { CUSTOMERS } from "./customers.json";
import { Customer } from "./customer";
import { of, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() {
  }

  getCustomers(): Observable<Customer[]> {
    return of(CUSTOMERS);
  }

}
