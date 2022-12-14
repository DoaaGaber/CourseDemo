import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticProductService {

  private productlist:IProduct[];
  prdListOfCategory:IProduct[]=[];
  constructor() {
    this.productlist=[
      {id:100 ,name:'tabletx5',price:2000,quantity:2 ,imgURl:'https://fakeimg.pl/200x100/?text=Hello',categoryID:1},
      {id:1001 ,name:'tableprox5',price:3000,quantity:10 ,imgURl:'https://fakeimg.pl/200x100/?text=Hello',categoryID:1}, 
      {id:200 ,name:'laptop MAC',price:9000,quantity:1 ,imgURl:'https://fakeimg.pl/200x100/?text=Hello',categoryID:2}, 
      {id:201 ,name:'laptop lenovo',price:5000,quantity:0 ,imgURl:'https://fakeimg.pl/200x100/?text=Hello',categoryID:2},
      {id:300 ,name:'mobile samsung',price:2000,quantity:2 ,imgURl:'https://fakeimg.pl/200x100/?text=Hello',categoryID:3}
    ]
   }
   getAllProduct():IProduct[]
   {
    return this.productlist;
   }
   getProductByCategory(catID:number):IProduct[]
   {
    if(catID==0)
    {
      return this.productlist;
    }
    else
    {
    return this.prdListOfCategory=this.productlist.filter(prd=>prd.categoryID==catID);
   }
   }

   getProductByID(prdID:number):IProduct | null
   {
      let foundProduct=this.productlist.find(prd=>prd.id==prdID);
      if(foundProduct!=null)
      {
          return foundProduct;
      }
      else
      {
        return null;
      }
   }
  getALLPrdID():number[]
  {
   let allIDs= this.productlist.map(prd=>prd.id);
    return allIDs;
  }
}
