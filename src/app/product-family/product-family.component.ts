import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ignoreElements } from 'rxjs';
import { Category, Cheveux, Corps, Product, products, Visage } from 'src/data/data';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';

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
    private router: Router,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    if(routeParams.get('categoryName')! in Category){
      this.category = routeParams.get('categoryName')!;
      this.family = routeParams.get('familyName')!; 
      this.products = this.productsData.filter(product => (product.subCategory === this.family && product.when === "stock"));
    }
    else{
      this.router.navigateByUrl('')
    }
  }

  useProduct(product: Product) {
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      width: "500px",
      height: "160px"
    });
    dialogRef.componentInstance.deleteEmitter.subscribe(
      success => {
        // product.when = "used";
        console.log('je veux supprimer le produit');
        this.dialog.closeAll();
      }
    )
    
  }
}
