import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { empty } from 'rxjs/observable/empty';
import { Subject } from 'rxjs/Subject';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../core/stores/product/product.service';
import { takeUntil } from 'rxjs/operators/takeUntil';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  private _ngOnDestroy$ = new Subject();

  items = this._productService.state.select(s => s.items)

  constructor(
    private _productService: ProductService,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // enable search
    this._productService.state.update(
      f => f.disableSearch, 
      false
    );
    // load items
    this._loadItems()
      .pipe(takeUntil(this._ngOnDestroy$))
      .subscribe();
  }

  ngOnDestroy() {
    // save last scrolling position
    this._productService.state.update(
      f => f.updatePosition,
      window.pageYOffset
    );
    // unsubscribe
    this._ngOnDestroy$.next();
  }

  /**
   * Scroll to last position when items are rendered!
   */
  rendered() {
    window.scrollTo(
      0, 
      this._productService.state.snapshot.position
    );
  }

  /**
   * Load items from EndPoint or Cache
   */
  private _loadItems() {
    return this._productService.state.snapshot.items === null
      ? this._productService.findAll(
          this._activatedRoute.snapshot
            .queryParamMap.get('q') || ''
      )
      : empty();
  }

}