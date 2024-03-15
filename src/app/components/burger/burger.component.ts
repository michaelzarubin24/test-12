import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrl: './burger.component.css',
})
export class BurgerComponent {
  constructor(private productService: ProductService) {}

  getProducts() {
    return this.productService.getByCategory('burger');
  }
}
