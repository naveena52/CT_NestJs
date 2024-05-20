import { ApiRoot } from 'src/ct/ct.interface';
import { Order } from '@commercetools/platform-sdk';
import { Injectable } from '@nestjs/common';
import { CtClientService } from 'src/ct/ct.service';
import { getOrders } from '../graphQL/orders';

@Injectable()
export class OrdersService {
  apiRoot: ApiRoot;

  constructor(private ctClientService: CtClientService) {
    this.apiRoot = this.ctClientService.createApiClient(
      ctClientService.ctpClient,
    );
  }

  async getOrdersfetch(offset: number): Promise<Order[]> {
    const totalOrders = (await this.apiRoot.orders().get().execute()).body
      .total;
    const limit = offset + 50;
    let tempLimit = 50;
    let tempOffset = 0;
    const promise = [];
    let count = 0;

    while (offset < totalOrders) {
      if (offset > 10000) {
        if (totalOrders - count < tempLimit) tempLimit = totalOrders - count;
        promise.push(
          this.apiRoot
            .graphql()
            .post({
              body: {
                query: getOrders(),
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
                query: getOrders(),
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
    const orders: Order[] = [];
    response.map((res: any) => {
      orders.push(...res.body.data.orders.results);
    });

    return orders;
  }
}
