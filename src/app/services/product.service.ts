import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/IProduct';
import { Product } from '../schemas/Product';
import { Category } from '../enums/Category';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: IProduct[];
  constructor() {
    this.products = [];
    this.init();
  }

  private init() {
    this.add(
      'Cheeseburger',
      this.getImageByCategory(Category.Burger),
      200,
      'Nice delicious classic cheeseburger',
      'Burger'
    );
    this.add(
      'Margherita',
      this.getImageByCategory(Category.Pizza),
      400,
      'Margherita features a bubbly crust, crushed San Marzano tomato sauce, fresh mozzarella and basil, a drizzle of olive oil, and a sprinkle of salt.',
      'Pizza'
    );
    this.add(
      'Shaverma',
      this.getImageByCategory(Category.Shaverma),
      400,
      'Chicken roll served with fresh tomatoes, piccles and souce',
      'Shaverma'
    );
    this.add(
      'Hamburger',
      this.getImageByCategory(Category.Burger),
      210,
      'Do you want a classic Hamburber od do you want to visit Hamburg?',
      'Burger'
    );
    this.add(
      'Diabolo',
      this.getImageByCategory(Category.Pizza),
      600,
      'A pizza so hot it can summon the devil himself',
      'Pizza'
    );
    this.add(
      'Taco',
      this.getImageByCategory(Category.Shaverma),
      500,
      'A Mexican delight',
      'Shaverma'
    );
  }

  public add(
    title: string,
    imgUrl: string,
    price: number,
    description: string,
    category: string
  ) {
    this.products.push(
      new Product(
        this.products.length,
        imgUrl || this.getImageByCategory(this.getCategory(category)),
        title,
        price,
        description,
        this.getCategory(category)
      )
    );
  }

  private getCategory(category: string): Category {
    let productCategory: Category;

    switch (category) {
      case 'Pizza':
        {
          productCategory = Category.Pizza;
        }
        break;
      case 'Burger':
        {
          productCategory = Category.Burger;
        }
        break;
      case 'Shaverma':
        {
          productCategory = Category.Shaverma;
        }
        break;

      default:
        break;
    }
    return productCategory;
  }

  getAllProducts() {
    return [...this.products];
  }

  getById(id: number) {
    return this.products.find((product) => product.getID() === id);
  }

  getByCategory(data: string) {
    const category = this.getCategory(data);

    return this.products.filter(
      (product) => product.getCategory() === category
    );
  }
  getImageByCategory(category: Category) {
    switch (category) {
      case Category.Pizza: {
        return 'https://www.southernliving.com/thmb/3x3cJaiOvQ8-3YxtMQX0vvh1hQw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg';
      }
      case Category.Burger: {
        return 'https://www.eatingwell.com/thmb/aKA6WL4j01orJ6F7v9bF4PH6B7Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/air-fryer-cheeseburgers-9e0cf0071bcb4b8d9bc806cabfb61347.jpg';
      }
      case Category.Shaverma: {
        return 'https://140539841.cdn6.editmysite.com/uploads/1/4/0/5/140539841/s470282083412145691_p34_i3_w1500.png';
      }
      default: {
        return 'https://static.vecteezy.com/system/resources/previews/025/067/651/non_2x/tacos-with-ai-generated-free-png.png';
      }
    }
  }
}
