import { Component, OnInit } from '@angular/core';
import { Category } from 'src/data/data';

@Component({
  selector: 'app-to-buy',
  templateUrl: './to-buy.component.html',
  styleUrls: ['./to-buy.component.scss']
})
export class ToBuyComponent implements OnInit {

  categories!:  string[]

  constructor() { }

  ngOnInit(): void {
    const cat: string[] = [];
    Object.values(Category).forEach((value => cat.push(value)));
    this.categories = cat;
  }

}
