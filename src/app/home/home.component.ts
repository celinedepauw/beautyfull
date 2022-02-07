import { Component, OnInit } from '@angular/core';

import { Product, products } from 'src/data/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[] = products
  
  constructor() { }

  ngOnInit(): void {
  }

}
