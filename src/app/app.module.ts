import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';

import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ProductFamilyComponent } from './product-family/product-family.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ToBuyComponent } from './to-buy/to-buy.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent,
    ProductFamilyComponent,
    HeaderComponent,
    FooterComponent,
    ToBuyComponent,
    DeleteModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    FlexLayoutModule,
    FlexModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
