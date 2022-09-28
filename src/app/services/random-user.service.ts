import { Injectable } from '@angular/core';

import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';
import { catchError, retry, throwError } from 'rxjs';
import { Results } from '../models/randomuser';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse){
    if(error.status===0){
      console.error(`Ha ocurrido un error: ${error.error}`)
    }else{
      console.error(`Error en el backend: ${error.status}.El error es: ${error.error}`)
    }

    return throwError(()=> new Error(`Error en la peticion del contacto aleatorio`));
  }

  obtenerRandomContact(): Observable<Results>{
    return this.http.get<Results>('https://randomuser.me/api').pipe(retry(2), catchError(this.handleError));
  }

  obtenerRandomContacts(n:number, sexo?:string): Observable<Results>{
   let params: HttpParams= new HttpParams().set('results',n);
   if(sexo){
    params=params.append('gender', sexo);
   }
   return this.http.get<Results>('https://randomuser.me/api', {params:params}).pipe(
    retry(2), 
    catchError(this.handleError));
  }

  obtenerRandomContactsPorGenero(n: number,sexo: string):Observable<Results>{
    const params: HttpParams= new HttpParams().set('gender',sexo);
    return this.http.get<Results>('https://randomuser.me/api', {params:params}).pipe(
     retry(2), 
     catchError(this.handleError));
  }
}
