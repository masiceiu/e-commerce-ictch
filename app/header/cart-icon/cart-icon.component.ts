import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../../core/stores/cart/cart.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.scss']
})
export class CartIconComponent implements OnInit, OnDestroy {

  count = 0;
  price = `$0`;

  private _subs: Subscription;

  constructor(private _cartService: CartService) { }

  ngOnInit() {
    this._subs = this._cartService.state.select(s => s)
      .subscribe(res => {
        this.count = res.items.length;
        this.price = CartService.countPrice(res.items);
    })
  }

  ngOnDestroy() {
    if (this._subs) {
      this._subs.unsubscribe();
    }
  }

}