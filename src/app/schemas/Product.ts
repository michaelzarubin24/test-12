import { Category } from '../enums/Category';
import { IProduct } from '../interfaces/IProduct';

export class Product implements IProduct {
  constructor(
    private id: number,
    private imageUrl: string,
    private title: string,
    private price: number,
    private description: string,
    private category: Category
  ) {}

  getID(): number {
    return this.id;
  }
  getImgUrl(): string {
    return this.imageUrl;
  }
  getTitle(): string {
    return this.title;
  }
  getPrice(): number {
    return this.price;
  }
  getDescription(): string {
    return this.description;
  }
  getCategory(): Category {
    return this.category;
  }
}
