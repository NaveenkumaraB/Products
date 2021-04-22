import { Identifiers } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {  Observable } from 'rxjs';
import { Product } from 'src/product/product'
import { ProductService } from 'src/product/product.service'

@Component({
  selector: 'app-product',
  providers: [Product, ProductService],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {
  result?: any;
  id?:number;
  name?: string;
  response:any;
  price?: number;
  description?: string;
  products:Product[]=[];

  constructor(private product: Product, private service: ProductService) { }

  ngOnInit(): void {
  }

  saveProduct() {
    this.product = {
      name: this.name,
      description: this.description,
      price: this.price,
products:this.products,
      
    };
    console.log("AppComp" + this.name + "Product" + this.product.name)
    console.log("AppComp-1" + this.name + "Product-1" + this.product.name)
    this.service.saveProduct(this.product).then(data => {
      this.result = data
      console.log(data)
    })
  }
  getProducts(){
    this.service.getPoducts().subscribe(response=>{this.products=response.body;});
    console.log(this.response)
  }
  deleteProduct($event:any){
    console.log("ID == "+$event.target.value);
    this.id=$event.target.value;
this.service.deletePost(this.id).subscribe(resd => {
  console.log(resd);});
  }
}
