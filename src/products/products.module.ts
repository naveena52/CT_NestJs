import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { CtClientService } from 'src/ct/ct.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, CtClientService],
})
export class ProductsModule {}
