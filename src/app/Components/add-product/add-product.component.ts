import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private prdservice :ProductsService ,private router :Router) { }

  ngOnInit(): void {
  }
  addpProduct()
  {
    const product:IProduct=   {
      id: 800,
      name: " Tablet v24",
      price: 24000,
      quantity: 2,
     imgURl: "https://fakeimg.pl/200x100/?text=Hello",
      categoryID: 2
    }

    this.prdservice.AddNewProduct(product).subscribe((prd)=>{
      alert("sucess");
      this.router.navigate(['/Products']);

    });
  }

}
