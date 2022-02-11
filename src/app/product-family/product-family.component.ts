import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, Product, products } from 'src/data/data';

@Component({
  selector: 'app-product-family',
  templateUrl: './product-family.component.html',
  styleUrls: ['./product-family.component.scss']
})
export class ProductFamilyComponent implements OnInit {

  family!: string;
  category!: string;
  productsData: Product[] = products;
  products!: Product[];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    if(this.family != ''){
      this.category = routeParams.get('categoryName')!
      this.family = routeParams.get('familyName')!
    }
    else{
      this.router.navigateByUrl('')
    }

    this.products = this.productsData.filter(product => product.subCategory == this.family)
    this.category = routeParams.get('categoryName')!
  
  }

}
