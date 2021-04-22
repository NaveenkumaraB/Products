import { Injectable } from '@angular/core';
import {Product} from 'src/product/product'
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http:HttpClient){}

  public static url:string="http://localhost:8080/ProductDetails";
    async saveProduct(product:Product){
      try{
        const data:any= await this.http.post(ProductService.url+"/save", product).toPromise();
        console.log(data)
        return data;
    
      }catch(Error){
      console.log("Error");
      }
    }

     getPoducts(){
      return  this.http.get<Product[]>(ProductService.url+"/products",{observe:'response'});
      
    }

    public deletePost(id:number) {
    
      const resd:any=this.http.delete(ProductService.url+"/delete/" + id)
      return resd;
    }
}

