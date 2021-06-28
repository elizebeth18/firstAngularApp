import { Component,OnInit } from '@angular/core';
import { IProduct } from './product.model';
import { ProductService } from './product.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css'],
    styles: [
      // 'thead{color:teal}','h5{color:tomato}'
      `.online {
        background-color : wheat
      }`
    ]
})

export class ProductComponent implements OnInit {
    title : string = "Product Filter";
    mainHeading : string = "*****Products Page*****";
    userText : string = ""; //User Input Text
    showTable : boolean = false;
    shoWImage : boolean = false;
    imageWidth : number = 100;
    serverStatus : string = "Offline";
    products : IProduct []= [];

   constructor(private productService: ProductService){
      this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
   }

   ngOnInit() : void {
      this.productService.getProducts()
          .subscribe((data) => this.products = data);
      //this.products = 
   }

   toggleImage() :  void {
        this.shoWImage = !this.shoWImage;
   }

   getColor() : string {
     return this.serverStatus === 'Online' ? 'green' : 'red';
   }

   onDataReceive(message: string): void {
     this.mainHeading = "*****Products Page*****" + message;
   }
}