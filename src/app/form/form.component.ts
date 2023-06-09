import { Component,OnInit } from '@angular/core';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-form ',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{


  productedName: string = ''
  category: any = ''
  price: number = 0
  stockQuality: number = 0
  description: string = ''


  constructor(public service:ServiceService) {
    
  }
  ngOnInit(): void {

  }




  insertProduct() {
    let data = {
    productedName:this.productedName,
    category:this.category,
    price:this.price,
    stockQuality:this.stockQuality,
    description:this.description,
    }
    this.service.addproduct(data).subscribe((data)=>{
      console.log(data);
      
    })


    // this.s.postData(data).subscribe((data)=>{

    //   console.log("data inserted",data);


    
  }


}
