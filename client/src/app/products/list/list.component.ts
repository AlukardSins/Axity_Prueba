import { Component, OnInit } from '@angular/core'

import { Product } from '../product'
import { ProductService } from '../product.service'

import { Flavor } from '../../flavors/flavor'
import { FlavorService } from '../../flavors/flavor.service'

import { Base } from '../../bases/base'
import { BaseService } from '../../bases/base.service'

@Component({
  selector: 'product-list',
  templateUrl: './list.component.html',
  styleUrls: [
    './list.component.css'
  ],
  providers: [
    ProductService,
    FlavorService,
    BaseService
  ]
})
export class ProductList implements OnInit {
  products: Product[]
  flavors: Flavor[]
  bases: Base[]
  selectedProduct: Product

  constructor (
    private productService: ProductService,
    private flavorService: FlavorService,
    private baseService: BaseService
  ) {}

  ngOnInit () {
    this.productService.getAllProducts().subscribe((products: Product[]) => {
      this.products = products
    })

    this.flavorService.getAllFlavors().subscribe((flavors: Flavor[]) => {
      this.flavors = flavors
    })

    this.baseService.getAllBases().subscribe((bases: Base[]) => {
      this.bases = bases

      this.flavors.forEach((flavor) => {
        this.bases.map((base) => {
          if (flavor.baseId === base._id) {
            this.products.map((product, idx) => {
              if (product.flavorId === flavor._id) {
                this.products[idx].flavorName = flavor.flavorName
                this.products[idx].baseName = base.baseName
              }
            })
          }
        })
      })
    })
  }

  private getIndex = (productId: String) => {
    return this.products.findIndex((product: Product) => {
      return product._id === productId
    })
  }

  selectProduct (product: Product) {
    this.selectedProduct = product

    this.flavors.forEach((flavor, f_idx) => {
      this.bases.map((base) => {
        if (flavor.baseId === base._id) {
          this.flavors[f_idx].baseName = base.baseName
          this.products.map((product, idx) => {
            if (product.flavorId === flavor._id) {
              this.products[idx].flavorName = flavor.flavorName
              this.products[idx].baseName = base.baseName
            }
          })
        }
      })
    })
  }

  createProduct = (product: Product) => {
    this.products.push(product)
    this.selectProduct(product)
    return this.products
  }

  createNewProduct () {
    let product: Product = {
      productName: '',
      flavorId: '',
      flavorName: '',
      baseName: ''
    }

    this.selectProduct(product)
  }

  updateProduct = (product: Product) => {
    let idx = this.getIndex(product._id)

    if (idx !== -1) {
      this.products[idx] = product
      this.selectProduct(product)
    }

    return this.products
  }

  deleteProduct = (productId: String) => {
    let idx = this.getIndex(productId)
    if (idx !== -1) {
      this.products.splice(idx, 1)
      this.selectProduct(null)
    }

    return this.products
  }
}
