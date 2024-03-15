import { Component, OnInit } from '@angular/core';
import { Customer } from "./customer";
import {NgFor, NgIf} from "@angular/common";
//import { CUSTOMERS } from "./customers.json"
import {CustomerService} from "./customer.service"

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './customers.component.html',
})
export class CustomersComponent implements OnInit{

  customers: Customer[];

  // inject
  constructor(private customerService: CustomerService) {
  }

  ngOnInit(){
     //this.customers = CUSTOMERS;
     //this.customers = this.customerService.getCustomers();
     this.customerService.getCustomers().subscribe(
       customers => this.customers = customers
     );
  }

}

