import { Component, OnInit ,OnChanges} from '@angular/core';
import { CartVM } from 'src/app/Models/CartVM';
import { ICategory } from 'src/app/Models/icategory';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.css']
})
export class OrderMasterComponent implements OnInit ,OnChanges{
  categortList:ICategory[];
  categoryIDSelected:number=0;
  cartList:CartVM[]=[];
  totalPrice:number=0;

  constructor() {
    this.categortList=[{id:1,name:'laptop'},{id:2,name:'tablet'},{id:3,name:'mobile'}]
   }
   ngOnChanges(): void
   {
    this.cartList;
   }
  

  ngOnInit(): void {
  }
  
  showCart(itemSent:CartVM)
  {
     this.cartList.push(itemSent);
     this.totalPrice += itemSent.count * itemSent.price;

  }

}
