import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { CategoriesController } from './categories/categories.controller';
import { UsersController } from './users/users.controller';

@Module({
  imports: [],
  controllers: [AppController, ProductsController, CategoriesController, UsersController],
  providers: [AppService],
})
export class AppModule {}
