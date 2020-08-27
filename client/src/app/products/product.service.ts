import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'

import { Product } from './product'

import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'

@Injectable()
export class ProductService {
  private productURL = 'http://localhost:3000/api/product'
  constructor (private http: HttpClient) {}

  createProduct (newProduct: Product): Observable<Product> {
    return this.http.post<Product>(`${this.productURL}/create`, newProduct).pipe(catchError(this.handleError))
  }

  getAllProducts (): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.productURL}/all`)
  }

  getOneProduct (searchId: String): Observable<Product> {
    return this.http.get<Product>(`${this.productURL}/one/${searchId}`)
  }

  updateProduct (updateProduct: Product): Observable<Product> {
    return this.http
      .patch<Product>(`${this.productURL}/update/${updateProduct._id}`, updateProduct)
      .pipe(catchError(this.handleError))
  }

  deleteProduct (deleteId: String): Observable<String> {
    return this.http.delete<String>(`${this.productURL}/delete/${deleteId}`).pipe(catchError(this.handleError))
  }

  private handleError (err: HttpErrorResponse) {
    let errMsg = err.error instanceof ErrorEvent ? err.error.message : `${err.status} - ${err.statusText}`
    console.log(errMsg)
    return throwError(errMsg)
  }
}
