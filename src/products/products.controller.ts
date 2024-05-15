import { Body, Controller, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('/get')
  async getProducts(@Body('offset') offset: number = 0): Promise<any> {
    const products = await this.productsService.getProductsfetch(offset);
    return products;
  }
}
