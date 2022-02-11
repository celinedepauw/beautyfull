import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    if(this.family != ''){
      if(routeParams.get('familyName')! in Visage || routeParams.get('familyName')! in Corps || routeParams.get('familyName')! in Cheveux){
        this.family = routeParams.get('familyName')!
        if(routeParams.get('categoryName')! in Category){
          this.category = routeParams.get('categoryName')!
        }
        else{
          this.router.navigateByUrl('')
        }
      }
      else{
        this.router.navigateByUrl('')
      }
    }
    else{
      this.router.navigateByUrl('')
    }

    this.products = this.productsData.filter(product => product.subCategory == this.family)
    this.category = routeParams.get('categoryName')!
  
  }

}
