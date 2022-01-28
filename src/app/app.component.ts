import { Component } from '@angular/core';
import { Product, products } from 'src/data/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'beautyfull';
  products: Product[] = products
}
