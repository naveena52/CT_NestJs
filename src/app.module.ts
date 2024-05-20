import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CtClientService } from './ct/ct.service';
import { ProductsModule } from './products/products.module';
import { ProductsService } from './products/products.service';
import { CtModule } from './ct/ct.module';
import { OrdersService } from './orders/orders.service';
import { OrdersController } from './orders/orders.controller';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [CtModule, ProductsModule, OrdersModule],
  controllers: [AppController, OrdersController],
  providers: [AppService, CtClientService, ProductsService, OrdersService],
})
export class AppModule {}
