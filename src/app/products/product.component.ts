import { Component } from '@angular/core';
import { IProduct } from './product.model';

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

export class ProductComponent {
    title : string = "Product Filter";
    mainHeading : string = "*****Products Page*****";
    userText : string = "User Input Text";
    showTable : boolean = false;
    shoWImage : boolean = false;
    imageWidth : number = 100;
    serverStatus : string = "Offline";
    products : IProduct []= [
        {
           _id: '5a05db08734d1d68d42d3300',
           productId: 3,
           productName: 'Hammer',
           productCode: 'TBX-0048',
           releaseDate: 'May 21, 2016',
           description: 'Curved claw steel hammer',
           price: 8.9,
           starRating: 1.8,
           imageUrl: 'https://i.ibb.co/TrR7jkM/hammer.png'
         },
         {
           _id: '5a05db24734d1d68d42d3313',
           productId: 8,
           productName: 'Saw',
           productCode: 'TBX-0022',
           releaseDate: 'May 15, 2016',
           description: '15-inch steel blade hand saw',
           price: 11.55,
           starRating: 3.7,
           imageUrl: 'https://i.ibb.co/vmS3kRH/saw.png'
         },
         {
           _id: '5a05db3d734d1d68d42d3322',
           productId: 10,
           productName: 'Video Game Controller',
           productCode: 'GMG-0042',
           releaseDate: 'October 15, 2015',
           description: 'Standard two-button video game controller',
           price: 35.95,
           starRating: 4.3,
           imageUrl: 'https://i.ibb.co/HD3RHMW/videogame.jpg'
         }
   ];

    constructor(){
      this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
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