import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {DirectiveComponent} from "./directive/directive.component";
import {CustomersComponent} from "./customers/customers.component";

const routes: Routes = [
  {path: '', redirectTo: '/customers', pathMatch: 'full'},
  {path: 'directives', component: DirectiveComponent},
  {path: 'customers', component: CustomersComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
