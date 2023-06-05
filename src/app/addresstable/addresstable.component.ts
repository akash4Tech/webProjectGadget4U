import { Component , OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-addresstable',
  templateUrl: './addresstable.component.html',
  styleUrls: ['./addresstable.component.scss']
})
export class AddresstableComponent  implements OnInit{

  show:any;
  
  constructor(public service:ServiceService) {
}
 

ngOnInit(): void {
    this.getall()
  }

  getall(){
    this.service.getaddress().subscribe((data)=>{
      this.show=data
    })
  
  }




}
