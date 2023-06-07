import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GadgetTableComponent } from './gadget-table/gadget-table.component';
import { ServiceService } from './service.service';
import {  HttpClientModule } from "@angular/common/http";
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { MobileComponent } from './mobile/mobile.component';
import { LaptopComponent } from './laptop/laptop.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AccoutsComponent } from './accouts/accouts.component';
import { AddressComponent } from './address/address.component';
import { AddresstableComponent } from './addresstable/addresstable.component';
import { SignupComponent } from './signup/signup.component';
import { SlideBarComponent } from './slide-bar/slide-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    GadgetTableComponent,
    FormComponent,
    MobileComponent,
    LaptopComponent,
    LoginComponent,
    HomeComponent,
    AccoutsComponent,
    AddressComponent,
    AddresstableComponent,
    SignupComponent,
    SlideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
  
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
