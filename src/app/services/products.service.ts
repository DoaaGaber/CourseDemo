import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';
import{Observable}  from 'rxjs'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  httpOptions;

  constructor(private httpclient :HttpClient) { 

     this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
        //Authorization: 'my-auth-token'
      })
    };
  }

  getAllProducts(): Observable<IProduct[]>
  {
    return this.httpclient.get<IProduct[]>(`${environment.APIURL}/products`);
  }
  getProductsByCatID(catID:number):Observable<IProduct[]>
  {
    return this.httpclient.get<IProduct[]>(`${environment.APIURL}/products?categoryID=${catID}`);
  }
  getProductByID(prdId:number):Observable<IProduct>
  {
    return this.httpclient.get<IProduct>(`${environment.APIURL}/products/${prdId}`);
  }
  AddNewProduct(newProduct:IProduct):Observable<IProduct>
  {
     return this.httpclient.post<IProduct>(`${environment.APIURL}/products`,JSON.stringify(newProduct),this.httpOptions);
  }
  updateProduct(prdId:number,updatePrd:IProduct)
  {

  }

}
