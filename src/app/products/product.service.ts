import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IProduct } from './product';

@Injectable()
export class ProductService {
  private productUrl = 'assets/products.json';
  constructor(private http: Http) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get(this.productUrl)
        .map((response: Response) => <IProduct[]> response.json())
        .do(data => JSON.stringify(data))
        .catch(this.handleError);
}

  getProduct(id: number): Observable<IProduct> {
    return this.getProducts().map(
      (products: IProduct[]) => products.find(p => p.productId === id)
    );
  }

  private handleError(error: Response) {
      console.error(error);
      return Observable.throw(error.json().error || 'Server error');
  }
}
