import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { ProductListComponent } from './Components/Order/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { OrderMasterComponent } from './Components/Order/order-master/order-master.component';
import { LightBoxDirective } from './Directives/light-box.directive';
import { ProductDetailsComponent } from './Components/Order/product-details/product-details.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { AddProductComponent } from './Components/add-product/add-product.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SidebarComponent,
    ProductListComponent,
    OrderMasterComponent,
    LightBoxDirective,
    ProductDetailsComponent,
    MainLayoutComponent,
    AddProductComponent
   
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
