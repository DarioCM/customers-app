import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from "./app.component";
import { AppRoutingModule } from './app-routing.module';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {DirectiveComponent} from "./directive/directive.component";
import {CustomersComponent} from "./customers/customers.component";

// for the backend connection
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, FooterComponent, DirectiveComponent, CustomersComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
