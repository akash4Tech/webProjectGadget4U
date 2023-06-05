import { Component,OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent  {
 
  constructor(public service:ServiceService) {
      
  }

 
  customer_id:any='';
  address_line1:any='';
  address_line2:any='';
  city:any='';
  state:any='';
  postal_code:any=''; 
  country:any='';

  body:any;

  onclick(){
    let body={
      customer_id:this.customer_id,
      address_line1:this.address_line1,
      address_line2:this.address_line2,
      city:this.city,
      state:this.state,
      postal_code:this.postal_code,
      country:this.country
    }

    this.service.insertaddress(body).subscribe((data)=>{
        console.log(data);
        
    })
  }
}
