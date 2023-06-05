import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url=''

  constructor(private http:HttpClient)  { }

  getProductList(){
    this.url='http://localhost:3000/getproducts'
    return this.http.get(this.url)
  }

  getMobiles(){
    this.url='http://localhost:3000/getMobiles'
    return this.http.get(this.url)
  }

  getLaptops(){
    this.url='http://localhost:3000/getLaptops'
    return this.http.get(this.url)
  }
  
  getaddress(){
    this.url='http://localhost:3000/address'
    return this.http.get(this.url)
  }

  insertaddress(body:any){
    this.url='http://localhost:3000/insert'
    return this.http.post(this.url,body)
  }




}



