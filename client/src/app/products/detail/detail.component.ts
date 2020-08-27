import { Component, Input } from '@angular/core'

import { Product } from '../product'
import { ProductService } from '../product.service'
import { Flavor } from '../../flavors/flavor'

@Component({
  selector: 'product-detail',
  templateUrl: './detail.component.html',
  styleUrls: [
    './detail.component.css'
  ]
})
export class ProductDetail {
  @Input() product: Product

  @Input() flavors: Flavor[]

  @Input() createHandler: Function

  @Input() updateHandler: Function

  @Input() deleteHandler: Function

  constructor (private productService: ProductService) {}

  createProduct (product: Product) {
    this.productService.createProduct(product).subscribe((newProduct: Product) => {
      this.createHandler(newProduct)
    })
  }

  updateProduct (product: Product): void {
    this.productService.updateProduct(product).subscribe((updatedProduct: Product) => {
      this.updateHandler(updatedProduct)
    })
  }

  deleteProduct (productId: String): void {
    this.productService.deleteProduct(productId).subscribe((deletedProductId: String) => {
      this.deleteHandler(deletedProductId)
    })
  }
}
