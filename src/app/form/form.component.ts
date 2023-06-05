import { Component } from '@angular/core';

@Component({
  selector: 'app-form ',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  productedName: string = ''
  category: any = ''
  price: number = 0
  stockQuality: number = 0
  description: string = ''


  insertProduct() {
    let data = {
    productedName:this.productedName,
    category:this.category,
    price:this.price,
    stockQuality:this.stockQuality,
    description:this.description,
    }
    // console.log(data);
    
  }


}
