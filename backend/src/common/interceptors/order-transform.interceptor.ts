import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class OrderTransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        if (!data) return data;
        
        // Vérifier si c'est une commande (a un totalAmount ou items)
        if (Array.isArray(data)) {
          return data.map((item) => this.isOrder(item) ? this.transformOrder(item) : item);
        }
        
        return this.isOrder(data) ? this.transformOrder(data) : data;
      }),
    );
  }

  private isOrder(data: any): boolean {
    return data && (data.totalAmount !== undefined || (Array.isArray(data.items) && data.items.length > 0));
  }

  private transformOrder(order: any) {
    if (!order) return order;

    return {
      ...order,
      total: order.totalAmount || order.total,
      items: (order.items || []).map((item: any) => ({
        ...item,
        productName: item.product?.name || item.productName,
        price: item.unitPrice || item.price,
        status: item.itemStatus || item.status,
        product: item.product
          ? {
              id: item.product.id,
              name: item.product.name,
            }
          : undefined,
      })),
    };
  }
}

