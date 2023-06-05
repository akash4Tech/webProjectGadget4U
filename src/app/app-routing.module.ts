import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GadgetTableComponent } from './gadget-table/gadget-table.component';
import { MobileComponent } from './mobile/mobile.component';
import { LaptopComponent } from './laptop/laptop.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AccoutsComponent } from './accouts/accouts.component';
import { AddressComponent } from './address/address.component';
import { AddresstableComponent } from './addresstable/addresstable.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [  
  {
    path:'producttable',
    component:GadgetTableComponent
  },
                          {path:'getMobiles',component:MobileComponent},
                          {path:'getLaptops', component:LaptopComponent},
                          {path:'login', component:LoginComponent},
                          {path:'accounts',component:AccoutsComponent},
                          {path:'address',component:AddressComponent},
                          {path:'addresstable',component:AddresstableComponent},
                          {path:'address',component:AddresstableComponent},
                          {path:'form',component:FormComponent},
                          {path:'**', component:HomeComponent},

                       
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
