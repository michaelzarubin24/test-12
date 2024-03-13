import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrl: './pizza.component.css',
})
export class PizzaComponent {
  constructor(private productService: ProductService) {}

  getProducts() {
    this.productService.getByCategory('Pizza');
  }
}
