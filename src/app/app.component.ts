import { Component } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'test-12';

  constructor(private p: ProductService) {}

  getP() {
    return this.p.getAllProducts();
  }
}
