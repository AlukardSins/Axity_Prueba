import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Product } from './product'
import { URI } from '../config'

@Injectable()
export class ProductService {
  private productURL = `${URI}/api/product`
  constructor (private http: HttpClient) {}

  createProduct (newProduct: Product): Promise<void | Product> {
    return this.http
      .post(`${this.productURL}/create`, newProduct)
      .toPromise()
      .then((res) => {
        res as Product[]
      })
      .catch(this.handleError)
  }

  getAllProducts (): Promise<void | Product[]> {
    return this.http
      .get(`${this.productURL}/all`)
      .toPromise()
      .then((res) => {
        res as Product[]
      })
      .catch(this.handleError)
  }

  getOneProduct (searchId: String): Promise<void | Product> {
    return this.http
      .get(`${this.productURL}/one/${searchId}`)
      .toPromise()
      .then((res) => {
        res as Product
      })
      .catch(this.handleError)
  }

  updateProduct (updateProduct: Product): Promise<void | Product> {
    return this.http
      .patch(`${this.productURL}/update/${updateProduct._id}`, updateProduct)
      .toPromise()
      .then((res) => {
        res as Product
      })
      .catch(this.handleError)
  }

  deleteProduct (deleteId: String): Promise<void | Product> {
    return this.http
      .delete(`${this.productURL}/delete/${deleteId}`)
      .toPromise()
      .then((res) => {
        res as Product
      })
      .catch(this.handleError)
  }

  private handleError (err: any) {
    let errMsg = err.message ? err.message : err.status ? `${err.status} - ${err.statusText}` : 'Server error'
    console.log(errMsg)
  }
}
