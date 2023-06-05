import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.scss']
})
export class LaptopComponent implements OnInit {
  
  laptopdata:any
  constructor(private service:ServiceService) {
    
  }
  
  ngOnInit(): void {

    this.service.getLaptops().subscribe((laptopdata)=>{
      this.laptopdata=laptopdata
    })

  }


}
