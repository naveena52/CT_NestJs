import { Body, Controller, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post('/get')
  async getOrders(@Body('offset') offset: number = 0): Promise<any> {
    const orders = await this.ordersService.getOrdersfetch(offset);
    return orders;
  }
}
