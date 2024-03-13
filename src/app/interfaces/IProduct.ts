import { Category } from '../enums/Category';

export interface IProduct {
  getID: () => number;
  getImgSource: () => string;
  getTitle: () => string;
  getPrice: () => number;
  getDescription: () => string;
  getCategory: () => Category;
}
