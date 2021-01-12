import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductService } from '../../core/stores/product/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { filter, first } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  control = new FormControl('');

  private _subs: Subscription;

  constructor(
    private _productService: ProductService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this._subs = this._productService.state
      .select(s => s.searchDisabled)
      .subscribe(res => {
        if (res) {
          this.control.disable({ emitEvent: false });
        } else {
          this.control.enable({ emitEvent: false });
        }
      })

    // set filter from url
    this._setControlFromUrl();

    // subscribe to filter changes
    this.control.valueChanges.subscribe(q => {
      // set to url
      this._router.navigate(['/'], { queryParams: { q } });
      // filter
      this._productService.findAll(q).subscribe();
    });

  }

  ngOnDestroy() {
    if (this._subs) {
      this._subs.unsubscribe();
    }
  }

  private _setControlFromUrl() {
    this._activatedRoute.queryParamMap
      .pipe(
        filter(r => !!r.get('q')),
        first()
      )
      .subscribe(res => {
        this.control.setValue(res.get('q'), { emitEvent: false });
      })
  }

}