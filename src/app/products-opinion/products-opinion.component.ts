import { Component, OnInit } from '@angular/core';
import { Category, Product, products } from 'src/data/data';

@Component({
  selector: 'app-products-opinion',
  templateUrl: './products-opinion.component.html',
  styleUrls: ['./products-opinion.component.scss']
})
export class ProductsOpinionComponent implements OnInit {

  productsData: Product[] = products.filter(product => product.when == 'used');
  products!: Product[];
  family!: string;
  category!: string;
  categories!:  string[];
  faceProducts!: Product[];
  bodyProducts!: Product[];
  hairProducts!: Product[];
  
  constructor() { }

  ngOnInit(): void {
    const cat: string[] = [];
    Object.values(Category).forEach((value => cat.push(value)));
    this.categories = cat;

    this.faceProducts = this.productsData.filter(product => product.category == Category.Visage);
    this.bodyProducts = this.productsData.filter(product => product.category == Category.Corps);
    this.hairProducts = this.productsData.filter(product => product.category == Category.Cheveux);
  }

}
