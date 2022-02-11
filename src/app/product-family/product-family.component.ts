import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ignoreElements } from 'rxjs';
import { Category, Cheveux, Corps, Product, products, Visage } from 'src/data/data';

@Component({
  selector: 'app-product-family',
  templateUrl: './product-family.component.html',
  styleUrls: ['./product-family.component.scss']
})
export class ProductFamilyComponent implements OnInit {

  family!: string;
  category!: string;
  productsData: Product[] = products.filter(product => product.when == 'stock');
  products!: Product[];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.category = routeParams.get('categoryName')!
    this.family = routeParams.get('familyName')! 
    this.products = this.productsData.filter(product => product.subCategory == this.family)
  }
}
