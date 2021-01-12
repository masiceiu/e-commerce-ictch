
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subjective } from 'subjective';
import { CartState, cartStateFns } from './cart.state';
import { ProductItem } from '../product/product.state';

@Injectable()
export class CartService {

  static countPrice(items: ProductItem[]) {
    const price = items
      .map(i => Number(i.price.split('$')[1]))
      .reduce((prev, curr, i) => prev + curr, 0);

    return `$${Math.round(price * 100) / 100}`
  }

  state = new Subjective(new CartState, cartStateFns)

}