import { Injectable } from '@angular/core';
import { CUSTOMERS } from "./customers.json";
import { Customer } from "./customer";
import { of, Observable } from "rxjs";

// for the backend connection
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private urlEndPoint: string = "http://localhost:8080/api/customers";

  constructor(private http_var: HttpClient ) {

  }

  getCustomers(): Observable<Customer[]> {
    //return of(CUSTOMERS);
    return this.http_var.get<Customer[]>(this.urlEndPoint) ;
  }

}
