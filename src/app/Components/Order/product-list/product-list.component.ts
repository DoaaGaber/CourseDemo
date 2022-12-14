import { outputAst } from '@angular/compiler';
import { Component, OnInit ,Input, OnChanges, SimpleChanges ,Output,EventEmitter} from '@angular/core';
import { Route, Router } from '@angular/router';
import { CartVM } from 'src/app/Models/CartVM';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/services/products.service';
import { StaticProductService } from 'src/app/services/static-product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit , OnChanges {

  productlistCat :IProduct[]=[];

  orderTotalPrice:number=0;
  @Input()  sendCategoryID:number=0;
  
   itemObj = {} as CartVM;
  @Output() itembought:EventEmitter<CartVM>;
  
  constructor(private productService :ProductsService , private router :Router) {
    
    this.itembought=new EventEmitter<CartVM>;
   }
  ngOnChanges(): void {
    this.productService.getProductsByCatID(this.sendCategoryID).subscribe(products=>{
      this.productlistCat=products;
    })
    //this.productlistCat=this.productService.getProductByCategory(this.sendCategoryID);
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(products=>{
      this.productlistCat=products;

    }
      );
  }
 
 
  buy(item:IProduct , count:string)
  {
    this.itemObj.pName=item.name;
    this.itemObj.count=Number(count);
    this.itemObj.price=item.price;
     this.itembought.emit(this.itemObj);
   
  }
  openDetails(itemID:number)
  {
     this.router.navigate(['/details',itemID])
  }
   
 

}
