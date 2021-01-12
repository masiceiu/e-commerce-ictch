import { Component, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductItem } from '../../core/stores/product/product.state';
import { ProductService } from '../../core/stores/product/product.service';
import { CartService } from '../../core/stores/cart/cart.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements AfterViewInit {

  @Input() items: ProductItem[];
  @Output() rendered = new EventEmitter();

  constructor(
    private _cartService: CartService,
    private _productService: ProductService) {
  }

  ngAfterViewInit() {
    // emit in the next microtask
    const p = new Promise(resolve => { resolve() });
		p.then(r => {
			this.rendered.emit();
		});
  }

  trackByFn = (index, item: ProductItem) => item.id;

  like(item: ProductItem) {
    this._productService.addLike(item).subscribe()
  }

  addToBasket(item: ProductItem) {
    this._cartService.state.update(
      f => f.addItem, item
    )
  }

}