import { Category } from '../enums/Category';

export interface IProduct {
  getID: () => number;
  getImgUrl(): string;
  getTitle: () => string;
  getPrice: () => number;
  getDescription: () => string;
  getCategory: () => Category;
}
