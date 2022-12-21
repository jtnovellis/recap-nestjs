import { Injectable } from '@nestjs/common';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'product 1',
      description: 'this is the description for product 1',
      price: 234,
      stock: 5,
      image: 'This is an url image',
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return this.products.find((item) => item.id === id);
  }

  create(payload: any) {
    this.counterId += 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  delete(id: number) {
    return this.products.filter((item) => item.id !== id);
  }

  update(id: number, payload: any) {
    const product = this.findOne(id);
    if (!product) {
      return null;
    }

    const index = this.products.indexOf(product);
    const productUpdated = {
      ...product,
      ...payload,
    };
    this.products.splice(index, 1, productUpdated);
    return productUpdated;
  }
}
