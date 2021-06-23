//To import module file that will help to build the file
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

//To work with form elements like input,checkbox,radio button etc
import { FormsModule } from '@angular/forms'

//Component
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies.component';
import { ProductComponent } from './products/product.component';
//Pipe
import { MyUpperText } from './products/myUpper.pipe';
import { DiscountPipe } from './products/myDiscount.pipe';
import { ProductSearchPipe } from './products/productFilter.pipe';
import { StarComponent } from './shared/star.component';
//Service
import { ProductService } from './products/product.service';

//decorator (metaData)
@NgModule({
  //All Modules will be declared here
  imports: [
    BrowserModule,
    FormsModule,
  ],

  //All Components and Pipes will be declared here
  declarations: [
    AppComponent,
    MoviesComponent,
    ProductComponent,
    MyUpperText,
    DiscountPipe,
    ProductSearchPipe,
    StarComponent,
  ],

  //Only first/main component
  bootstrap: [
    AppComponent
  ],

  //All services will be declared here
  providers: [
    ProductService
  ]
})

//to expose to the external environment
export class AppModule {

}