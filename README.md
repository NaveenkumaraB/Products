Creating Angular Project
Step-1: Open Visual Studio Code, Terminal->new Terminal. First you have to check node.js 	is installed or not, for that enter below command in terminal.
	node -v
	npm -v
Step-2: Then install angular cli globally on your machine by the following 	command
npm install -g @angular/cli
After that run below command to create a new project.
ng new ProjectName
Step-3:  create a folder inside the app folder, generate components and service.
ng generate component Product –module app
ng generate service Product
	create a file with name product.ts.
Inside service.ts, Put @Injectable({provideIn: ‘root’]). Create one ProductService Class and Inject httpClient class into constructor. 
export class ProductService {
  	constructor(private http: HttpClient) { })

Step-4: Create getProducts method, then inside that method, call http.get() method and pass url and declare observe.
return this.http.get<Product[]>(ProductService.product_get_url,{ observe: 'response' })

And create saveProduct() method with product parameter. In that method mention try-catch block and call http.post() method by passing url and product object as parameter. Then save this response into a variable and return.
      const data: any = await this.http.post(ProductService.product_save_url,product).toPromise();

Step-5: Inside component.ts  declare variables and pass ProductService and Product class as parameters into constructor.
To get Product details from database create one method that call getProducts method and assign response into an array.
	this.service.getProducts().subscribe(response => {
this.products=response.body;

To Save Product details into database, create a method and make a product object using product details variables into a single variable. Call saveProduct method of ProductService class and pass product parameter. Then save the response into a variable.
    this.product={
      name:this.name,
      prize:this.prize,
      description:this.description
    };
    this.service.saveProduct(this.product).then(data => {this.result = data;})
Step-6: Provide Class names in product component. Providers:[ProductService, Product],
Step-7: Import below packages into product component.ts
import { Component, OnInit } from '@angular/core';
import {  Observable } from 'rxjs';
import { Product } from './productcomponent.product'
import { ProductService } from 'src/app/ProductService/productservice.service'

Steps-8: Import package as mentioned below into product service.ts 
import { Injectable } from '@angular/core';
import {Product} from 'src/app/productcomponent/productcomponent.product'
import { HttpClient } from '@angular/common/http';

Step-9: : Import package as mentioned below into app module.ts.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './productcomponent/productcomponent.component';import { FormsModule } from '@angular/forms';
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],

Step-10: Write 3 input tag, inside that mention [(ngModel)] for every tag because we are doing two way data binding. And write a button tag as name as save, mention click event and  call saveproduct() method. When you click that button saveProduct() method will call. Same for getProducst() method also.
Step-11: create one table with table row and 3 table data. Inside second table row tag write 
<tr *ngFor="let product of products ">
Here, let is a keyword to iterate the product properties and product is the variable of products.
In between table row tag mention 3 table data tags, and mention properties of product 
<td>{{ product.name }}</td>

Step 12: mention product custom tag to app html file,  
<app-product></app-product>
Step:13 To run this project type a command ng serve

