import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Location } from '@angular/common';
import { ProductService } from '../core/stores/product/product.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { ProductItem } from '../core/stores/product/product.state';
import { CartService } from '../core/stores/cart/cart.service';
import { switchMap, tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  item: ProductItem = null;

  constructor(
    private _cd: ChangeDetectorRef,
    private _activatedRoute: ActivatedRoute,
    private _productService: ProductService,
    private _cartService: CartService,
    private _location: Location) { }

  ngOnInit() {
    this._productService.state.update(
      f => f.disableSearch, 
      true
    );
    this._activatedRoute.paramMap
      .pipe(
        switchMap(r => of([])
          .pipe(...this._loadProducts(Number(r.get('id'))))
        ),
      )
      .subscribe()
  }

  goBack() {
    this._location.back();
  }

  like(item: ProductItem) {
    this._productService.addLike(item)
      .pipe(...this._loadProducts(item.id))
      .subscribe()
  }

  comment(item: ProductItem) {
    this._productService.addComment(item)
      .pipe(...this._loadProducts(item.id))
      .subscribe()
  }

  addToBasket(item: ProductItem) {
    this._cartService.state.update(
      f => f.addItem, 
      item
    )
  }

  private _loadProducts(id: number) {
    return [
      switchMap(() => this._productService.findOne(id)),
      tap(res => {
        this.item = res as any;
        this._cd.markForCheck();
      })
    ]
  }

}