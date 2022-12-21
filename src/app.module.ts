import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { CategoriesController } from './categories/categories.controller';
import { UsersController } from './users/users.controller';
import { ProductsService } from './products/products.service';
import { CategoriesService } from './categories/categories.service';
import { UsersService } from './users/users.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    UsersController,
  ],
  providers: [AppService, ProductsService, CategoriesService, UsersService],
})
export class AppModule {}
