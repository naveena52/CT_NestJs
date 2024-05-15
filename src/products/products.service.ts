import { ApiRoot } from 'src/ct/ct.interface';
import { Product } from '@commercetools/platform-sdk';
import { Injectable } from '@nestjs/common';
import { CtClientService } from 'src/ct/ct.service';
import { getproducts } from '../graphQL/products';
@Injectable()
export class ProductsService {
  apiRoot: ApiRoot;
  constructor(private ctCilentService: CtClientService) {
    this.apiRoot = this.ctCilentService.createApiClient(
      ctCilentService.ctpClient,
    );
  }
  async getProductsfetch(offset: number): Promise<any> {
    const totalProduct = (await this.apiRoot.products().get().execute()).body
      .total;
    const limit = offset + 50;
    let tempLimit = 50;
    let tempOffset = 0;
    const promise = [];
    let count = 0;
    while (offset < totalProduct) {
      if (offset > 10000) {
        if (totalProduct - count < tempLimit) tempLimit = totalProduct - count;
        promise.push(
          this.apiRoot
            .graphql()
            .post({
              body: {
                query: getproducts(),
                variables: {
                  limit: tempLimit,
                  offset: tempOffset,
                  sort: 'createdAt desc',
                },
              },
            })
            .execute(),
        );
        count += 50;
        tempOffset += 50;
        if (offset >= limit) break;
      } else {
        promise.push(
          this.apiRoot
            .graphql()
            .post({
              body: {
                query: getproducts(),
                variables: {
                  limit: tempLimit,
                  offset: offset,
                  sort: 'createdAt asc',
                },
              },
            })
            .execute(),
        );
        count += 50;
      }
      offset += 50;
      if (offset >= limit) break;
    }
    const response = await Promise.all(promise);
    const products: Product[] = [];
    response.map((res: any) => {
      products.push(...res.body.data.products.results);
    });
    return products;
  }
}
