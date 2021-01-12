
import { ProductItem } from '../product/product.state';
import * as _ from 'lodash';

export class CartState {
  items: ProductItem[] = [];
}

class CartStateFns {

  addItem(state: CartState, item: ProductItem): CartState {
    return {
      ...state,
      items: [...state.items, item]
    }
  }

  removeItem(state: CartState, id: number): CartState {
    return {
      ...state,
      items: state.items.filter(i => i.id !== id)
    }
  }

  setNumberOfItemsByCount(
    state: CartState,
    value: { count: number; item: ProductItem }
  ): CartState {
    const filtered = state.items
      .filter(i => i.id !== value.item.id);
    return {
      ...state,
      items: [
        ...filtered, 
        ..._.range(value.count).map(() => value.item)
      ]
    }
  }
}

export const cartStateFns = new CartStateFns;