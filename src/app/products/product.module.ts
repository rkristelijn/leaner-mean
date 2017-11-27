import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';

import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';
import { ProductFilterPipe } from './product-filter.pipe';

import { ProductGuardService } from './product-guard.service';
import { ProductService } from './product.service';

import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ProductRoutingModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    ProductFilterPipe
  ],
  providers: [
    ProductService,
    ProductGuardService
  ]
})
export class ProductModule { }
