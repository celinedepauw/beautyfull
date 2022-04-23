import { Component, OnInit } from '@angular/core';
import { Category, Cheveux, Corps, Product, products, Visage } from 'src/data/data';

@Component({
  selector: 'app-to-buy',
  templateUrl: './to-buy.component.html',
  styleUrls: ['./to-buy.component.scss']
})
export class ToBuyComponent implements OnInit {

  productsData: Product[] = products.filter(product => product.when == 'stock');
  products!: Product[];
  category!: string;
  faceFamilies!: string[];
  bodyFamilies!: string[];
  hairFamilies!: string[];
  family!: string;
  faceProducts!: Product[];
  bodyProducts!: Product[];
  hairProducts!: Product[];

  familiesInStock: string[] = [];
  familiesToBuy!: string[];

  constructor() { }

  ngOnInit(): void {

    const faceFamiliesInStock: string[] = [];
    const faceFamiliesToBuy: string[] = [];
    
    this.faceProducts = this.productsData.filter(product => product.category == Category.Visage)
    this.faceProducts.forEach(product => {
      faceFamiliesInStock.push(product.subCategory)
    });
   
    //console.log('en stock : ', faceFamiliesInStock) 

    const faceFam: string[] = [];
    Object.values(Visage).forEach((value => faceFam.push(value)));
    this.faceFamilies = faceFam
    //console.log('familles de visage ', this.faceFamilies)
   
  }

}
