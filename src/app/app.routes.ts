import { Routes } from '@angular/router';
import {DirectiveComponent} from "./directive/directive.component";
import {CustomersComponent} from "./customers/customers.component";

export const routes: Routes = [
  {path: '', redirectTo: '/customers', pathMatch: 'full'},
  {path: 'directives', component: DirectiveComponent},
  {path: 'customers', component: CustomersComponent}
];

