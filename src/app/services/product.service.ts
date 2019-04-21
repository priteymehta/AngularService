import { Injectable } from '@angular/core';
import { ProductModel } from '../models/productModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  _listProducts : ProductModel[];
  constructor(_objProductModel : ProductModel) { }

  getProducts(){
    this._listProducts = [
      {
        ProductId:1,ProductPrice : 100.00 , ProductName:"Lenovo lite"
      },{
        ProductId:2,ProductPrice:250.00, ProductName:"Samsung Pro"
      },
      {
        ProductId:3,ProductName:"LG ",ProductPrice:500.00
      }
    ]
  }
}
