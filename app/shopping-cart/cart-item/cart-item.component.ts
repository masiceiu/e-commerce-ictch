import { Component, Input } from '@angular/core';
import { ProductItem } from '../../core/stores/product/product.state';
import { CartItem } from '../shopping-cart.component';
import { FormControl } from '@angular/forms';
import { CartService } from '../../core/stores/cart/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() item: CartItem;
  count = new FormControl();

  constructor(private _cartService: CartService) {
  }

  ngOnInit() {
    this.count.setValue(this.item.count);
    this.count.valueChanges.subscribe(count => {
      this._cartService
        .state.update(
          f => f.setNumberOfItemsByCount,
          { count, item: this.item }
        )
    })
  }

}