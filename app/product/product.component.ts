import { Component, OnInit, Input } from '@angular/core';
import { ProductItem } from '../core/stores/product/product.state';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() item: ProductItem;
}