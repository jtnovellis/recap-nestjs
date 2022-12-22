import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';

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
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException('This product does not exist');
    }
    return product;
  }

  create(payload: CreateProductDto) {
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

  update(id: number, payload: UpdateProductDto) {
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
