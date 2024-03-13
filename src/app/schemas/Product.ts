import { Category } from '../enums/Category';
import { IProduct } from '../interfaces/IProduct';

export class Product implements IProduct {
  constructor(
    private id: number,
    private imageSrc: string,
    private title: string,
    private price: number,
    private description: string,
    private category: Category
  ) {}

  getID = () => {
    return this.id;
  };
  getImgSource = () => {
    return this.imageSrc;
  };
  getTitle = () => {
    return this.title;
  };
  getPrice = () => {
    return this.price;
  };
  getDescription = () => {
    return this.description;
  };
  getCategory = () => {
    return this.category;
  };
}
