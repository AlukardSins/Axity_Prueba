import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'

import { Base } from './base'

import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'

@Injectable()
export class BaseService {
  private baseURL = 'http://localhost:3000/api/base'
  constructor (private http: HttpClient) {}

  createBase (newBase: Base): Observable<Base> {
    return this.http.post<Base>(`${this.baseURL}/create`, newBase).pipe(catchError(this.handleError))
  }

  getAllBases (): Observable<Base[]> {
    return this.http.get<Base[]>(`${this.baseURL}/all`)
  }

  getOneBase (searchId: String): Observable<Base> {
    return this.http.get<Base>(`${this.baseURL}/one/${searchId}`)
  }

  updateBase (updateBase: Base): Observable<Base> {
    return this.http
      .patch<Base>(`${this.baseURL}/update/${updateBase._id}`, updateBase)
      .pipe(catchError(this.handleError))
  }

  deleteBase (deleteId: String): Observable<String> {
    return this.http.delete<String>(`${this.baseURL}/delete/${deleteId}`).pipe(catchError(this.handleError))
  }

  private handleError (err: HttpErrorResponse) {
    let errMsg = err.error instanceof ErrorEvent ? err.error.message : `${err.status} - ${err.statusText}`
    console.log(errMsg)
    return throwError(errMsg)
  }
}
