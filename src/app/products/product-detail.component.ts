import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Product Details';
  product: IProduct;
  errorMessage: string;
  private sub: Subscription;

  constructor(
      private route: ActivatedRoute, 
      private router: Router,
      private productService: ProductService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(
      params => {
        let id = +params['id'];
        this.getProduct(id);
      }
    );
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getProduct(id: number): void {
    this.productService.getProduct(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = <any>error
    )
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
  onRatingClicked(message: string) : void {
    this.pageTitle = `Product Details: ${message}`;
  }
}
