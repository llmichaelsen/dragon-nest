import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Dragon } from './dragon';

@Injectable({
  providedIn: 'root'
})
export class DragonService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  baseurl = 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon';

  getAll(): Observable<any>{
    return this.http.get<Dragon>(this.baseurl)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  getDragon(id): Observable<any> {
    return this.http.get<Dragon>(this.baseurl + '/' + id)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }
  
  create(dragon: Dragon): Observable<any>{
    return this.http.post<Dragon>(this.baseurl, JSON.stringify(dragon), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  delete(dragon: Dragon){
    return this.http.delete<Dragon>(this.baseurl + '/' + dragon.id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  update(id, dragon): Observable<any> {
    return this.http.put<Dragon>(this.baseurl + '/' + id, JSON.stringify(dragon), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  errorHandl(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }

}
