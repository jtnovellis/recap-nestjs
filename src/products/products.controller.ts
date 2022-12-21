import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getAll() {
    return `This endpoint return all products`;
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return `This endpoint return a product with id: ${id}`;
  }

  @Post()
  new(@Body() payload: any) {
    return {
      message: 'Product created',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: any) {
    return {
      message: `This endpoint update a product with id: ${id}`,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `This endpoint delete a product with id: ${id}`;
  }
}
