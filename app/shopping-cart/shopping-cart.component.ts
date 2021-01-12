import { Component, OnInit } from '@angular/core';
import { CartService } from '../core/stores/cart/cart.service';
import { ProductService } from '../core/stores/product/product.service';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { ProductItem } from '../core/stores/product/product.state';
import * as _ from 'lodash';

export interface CartItem extends ProductItem {
  count: number;
  priceTotal: string;
}

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  items: Observable<CartItem[]> = this._cartService.state
    .select(s => s.items)
    .pipe(
      map(items => _.groupBy(items, 'id')),
      map((items) => {
        const i = [];
        for (const key in items) {
          i.push({
            ...items[key][0],
            priceTotal: CartService.countPrice(items[key]),
            count: Object.keys(items[key]).length
          });
        }
        return i;
      })
    )

  constructor(
    private _cartService: CartService,
    private _productService: ProductService) { }

  ngOnInit() {
    this._productService.state.update(
      f => f.disableSearch, 
      true
    );
  }

  trackByFn = (index, item: CartItem) => item.id;

}