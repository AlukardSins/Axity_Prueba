import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'

import { Flavor } from './flavor'

import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'

@Injectable()
export class FlavorService {
  private flavorURL = 'http://localhost:3000/api/flavor'
  constructor (private http: HttpClient) {}

  createFlavor (newFlavor: Flavor): Observable<Flavor> {
    return this.http.post<Flavor>(`${this.flavorURL}/create`, newFlavor).pipe(catchError(this.handleError))
  }

  getAllFlavors (): Observable<Flavor[]> {
    return this.http.get<Flavor[]>(`${this.flavorURL}/all`)
  }

  getOneFlavor (searchId: String): Observable<Flavor> {
    return this.http.get<Flavor>(`${this.flavorURL}/one/${searchId}`)
  }

  updateFlavor (updateFlavor: Flavor): Observable<Flavor> {
    return this.http
      .patch<Flavor>(`${this.flavorURL}/update/${updateFlavor._id}`, updateFlavor)
      .pipe(catchError(this.handleError))
  }

  deleteFlavor (deleteId: String): Observable<String> {
    return this.http.delete<String>(`${this.flavorURL}/delete/${deleteId}`).pipe(catchError(this.handleError))
  }

  private handleError (err: HttpErrorResponse) {
    let errMsg = err.error instanceof ErrorEvent ? err.error.message : `${err.status} - ${err.statusText}`
    console.log(errMsg)
    return throwError(errMsg)
  }
}
