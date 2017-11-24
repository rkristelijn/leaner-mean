import { Pipe, PipeTransform } from '@angular/core';

import { IProduct } from './product';

@Pipe({
  name: 'productFilter',
  pure: false
})
export class ProductFilterPipe implements PipeTransform {
  
  transform(allProducts: IProduct[], filterBy: string): IProduct[] {
    
    let filterByDefined: boolean = !!filterBy;
    
    if(!filterByDefined) 
      return allProducts;
    
    return allProducts.filter(
      (product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

}
