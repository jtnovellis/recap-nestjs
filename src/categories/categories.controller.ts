import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Body,
} from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get()
  getAllCategories() {
    return `This endpoint return all categories`;
  }

  @Get(':id')
  getCategory(@Param('id') id: string) {
    return `This endpoint return a category with id: ${id}`;
  }

  @Post()
  newCategory(@Body() payload: any) {
    return {
      message: 'This endpoint create a new category',
      payload,
    };
  }

  @Put(':id')
  updateCategory(@Param('id') id: string, @Body() payload: any) {
    return {
      message: `This endpoint update a category with id: ${id}`,
      payload,
    };
  }

  @Delete(':id')
  deleteCategory(@Param('id') id: string) {
    return `This endpoint delete a category with id: ${id}`;
  }
}
