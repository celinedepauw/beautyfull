import { Component, OnInit } from '@angular/core';

import { Category, Product, products } from 'src/data/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories!:  string[]

  constructor() { }

  ngOnInit(): void {
    const cat: string[] = [];
    Object.values(Category).forEach((value => cat.push(value)));
    this.categories = cat;
  }
}
