import { Component,OnInit } from '@angular/core';
import { ServiceService } from "../service.service";
@Component({
  selector: 'app-gadget-table',
  templateUrl: './gadget-table.component.html',
  styleUrls: ['./gadget-table.component.scss']
})
export class GadgetTableComponent implements OnInit {

  productList:any

     
  constructor(public service:ServiceService) {
    

  }

  ngOnInit(): void {
    this.service.getProductList().subscribe((productList)=>{
      this.productList=productList
    })

    
  }
      
}
