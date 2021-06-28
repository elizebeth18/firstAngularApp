//To import module file that will help to build the file
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

//To work with form elements like input,checkbox,radio button etc
import { FormsModule } from '@angular/forms';

//For HTTP API call i.e GET or POST
import { HttpClientModule } from '@angular/common/http';

//For Routing
import { RouterModule } from '@angular/router';

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
import { MusicComponent } from './music/music.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { NotFoundComponent } from './shared/notFound.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { MusicService } from './music/music.service';

//decorator (metaData)
@NgModule({
  //All Modules will be declared here
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductComponent},
      {path: 'product/:id', component: ProductDetailComponent},
      {path: 'orders', component: OrdersComponent},
      {path: 'music', component: MusicComponent},
      {path: 'home', component: HomeComponent},
      {path: '',redirectTo: 'home',pathMatch: 'full'},
      {path: '**', component: NotFoundComponent}
    ])
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
    MusicComponent,
    HomeComponent,
    OrdersComponent,
    NotFoundComponent,
    ProductDetailComponent
  ],

  //Only first/main component
  bootstrap: [
    AppComponent
  ],

  //All services will be declared here
  providers: [
    ProductService,
    MusicService
  ]
})

//to expose to the external environment
export class AppModule {

}