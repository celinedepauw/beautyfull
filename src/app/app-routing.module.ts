import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { HomeComponent } from './home/home.component';
import { ProductFamilyComponent } from './product-family/product-family.component';

const routes: Routes = [
  { path : '', component: HomeComponent },
  { path : 'categorie/:categoryName', component: CategoryComponent },
  { path: 'family/:familyName', component: ProductFamilyComponent },
  { path: 'product/:idProduct', component: DetailsProductComponent },
  { path:'**', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
