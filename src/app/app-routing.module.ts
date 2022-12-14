import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { HomeComponent } from './Components/home/home.component';
import { OrderMasterComponent } from './Components/Order/order-master/order-master.component';
import { ProductDetailsComponent } from './Components/Order/product-details/product-details.component';
import { ProductListComponent } from './Components/Order/product-list/product-list.component';


const routes: Routes = [ 
  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:'Home',component:HomeComponent},
  {path:'Products',component:ProductListComponent},
  {path:'Order',component:OrderMasterComponent},
  {path:'product/Add',component:AddProductComponent},
  {path:'details/:pid',component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
