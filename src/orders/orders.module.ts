import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { CtClientService } from 'src/ct/ct.service';
@Module({
  controllers: [OrdersController],
  providers: [OrdersService, CtClientService],
})
export class OrdersModule {}
