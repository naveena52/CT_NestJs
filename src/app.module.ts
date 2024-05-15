import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CtClientService } from './ct/ct.service';
import { ProductsModule } from './products/products.module';
import { ProductsService } from './products/products.service';
import { CtModule } from './ct/ct.module';

@Module({
  imports: [CtModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService, CtClientService, ProductsService],
})
export class AppModule {}
