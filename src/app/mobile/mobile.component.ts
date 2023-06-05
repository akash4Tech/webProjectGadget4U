import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit{
 
  mobiledata:any
 constructor(private service:ServiceService) {
  
 }
 
  ngOnInit(): void {
    this.service.getMobiles().subscribe((mobiledata)=>{
      this.mobiledata=mobiledata
    })

  }

}
