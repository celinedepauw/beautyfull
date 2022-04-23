import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, Cheveux, Corps, Product, products, Visage } from 'src/data/data';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  category!: string;
  families!: string[];
  productsData: Product[] = products;
  products!: Product[];
  family!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
      if(routeParams.get('categoryName')! in Category){
        this.category = routeParams.get('categoryName')!
      }
      else{
        this.router.navigateByUrl('')
      }

    const fam: string[] = [];
    if(this.category == Category.Visage){
      Object.values(Visage).forEach((value => fam.push(value)));
      this.families = fam;
      for(let i = 0; i < this.families.length; i++){
        this.products = this.productsData.filter(product => product.subCategory == this.families[i]) 
      }
    }
    else if(this.category == Category.Corps){
      Object.values(Corps).forEach((value => fam.push(value)));
      this.families = fam;
      for(let i = 0; i < this.families.length; i++){
        this.products = this.productsData.filter(product => product.subCategory == this.families[i])
      }
    }
    else if(this.category == Category.Cheveux){
      Object.values(Cheveux).forEach((value => fam.push(value)));
      this.families = fam;
      for(let i = 0; i < this.families.length; i++){
        this.products = this.productsData.filter(product => product.subCategory == this.families[i])
      }
    }
  }

}
