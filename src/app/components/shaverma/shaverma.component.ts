import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-shaverma',
  templateUrl: './shaverma.component.html',
  styleUrl: './shaverma.component.css',
})
export class ShavermaComponent {
  constructor(private productService: ProductService) {}

  getProducts() {
    this.productService.getByCategory('Shaverma');
  }
}
