import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subjective } from 'subjective';
import { of } from 'rxjs/observable/of';
import { 
  productState,
  ProductItem,
  productStateFns
} from './product.state';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';


@Injectable()
export class ProductService {

  // provide state from service
  state = new Subjective(productState, productStateFns);

  constructor(private _http: HttpClient) {
  }

  /**
   * Load items and dispatch to store
   */
  findAll(query?: string): Observable<ProductItem[]> {
    return this._http.get('api/products/?name=^' + query)
      .pipe(
        catchError((res) => Observable.of([])),
        tap((items: ProductItem[]) => {
          // dispatch initial items
          this.state.update(
            f => f.replaceItems,
            items
          )          
        })
      )
  }

  findOne(id: number): Observable<ProductItem> {
    return this._http.get('api/products/' + id)
      .pipe(catchError(res => of(null)))
  }

  addLike(item: ProductItem) {
    const likes = item.likes + 1;
    return this._http.put('api/products/', { ...item, likes })
      .pipe(
        catchError(res => of(null)),
        tap(res => this.state.update(
            f => f.addLike,
            { id: item.id, likes }
          )
        )
      )
  }

  addComment(item: ProductItem) {
    const comments = item.comments + 1;
    return this._http.put('api/products/', { ...item, comments })
      .pipe(
        catchError(res => of(null)),
        tap(res => this.state.update(
            f => f.addComment, 
            { id: item.id, comments }
          )
        )
      )
  }

}