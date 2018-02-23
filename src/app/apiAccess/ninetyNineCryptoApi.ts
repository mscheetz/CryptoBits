import { Injectable } from '@angular/core';
//import { Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
//import 'application/x-www-form-urlencoded';
//import { RequestOptions } from '@angular/http/src/base_request_options';
//import { RestApi } from './restApi';
//import { HttpMethod } from "blocking-proxy/built/lib/webdriver_commands";
import { isNullOrUndefined } from 'util';
//import { CryptoJS } from "crypto-js";
import { Coin } from "../classes/99Crypto/coin";
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class NinetyNineCryptoApi {
  
  private apiBase: string = 'https://api.99cryptocoin.com';
  //private apiComplete: string = '';
  //headers;
  //options;
  //data: any = {};

  constructor(private http: HttpClient) {

    //console.log('99 Crypto Coin APIs');
  }

  /**
   *  Get coin name/symbol.
   */
  getCoins(): Observable<Coin[]>{
    let url = this.apiBase + "/v1/coins";
    let headers = new HttpHeaders();
    headers = headers.set('Access-Control-Allow-Origin','*')
    .set('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Authorization')
    .set('Access-Control-Allow-Credentials', 'true')
    .set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    //.set('Content-Type', 'text/plain');
//, {headers: headers}
    return this.http.get<Coin[]>(url).pipe(
      tap(_ => this.log('coin gotten')),
      catchError(this.handleError<Coin[]>('getCoins')));

    // let results: any = this.nnccRequest(
    //   'GET',
    //   url,
    //   false
    // );

    //return results.result;
  }

  // /**
  //  * Request a 99 Crypto Coin api
  //  * 
  //  * @param httpMethod      Http Method type
  //  * @param url             Url to access
  //  * @param secured         Is the request secured?
  //  * @param parameters      Optional query parameters
  //  */
  // private nnccRequest(
  //   httpMethod: string,
  //   url: string,
  //   secured: boolean,
  //   ...parameters: [ string, any ][]): Observable<any>{
      
  //     let uri: URL = new URL(
  //       url,
  //       this.apiBase
  //     );

  //     for(let parameter of parameters){
  //       if(isNullOrUndefined(parameter[1])){
  //         continue;
  //       }
  //       uri.searchParams.append(parameter[0], parameter[1].toString());
  //     }

  //     let headers: any = this.GetHeaders(url);

  //     return this.http.get(uri.href, headers);
  //     // return this.restApi.apiGetRequest(
  //     //   uri.href,
  //     //   headers
  //     // );

  // }

  // private GetHeaders(url: string):any {    
  //   let headers: any = {};

  //   headers["Access-Control-Allow-Origin"] = '*';
  //   // headers["Access-Control-Expose-Headers"] = 'Content-Length, Content-Encoding, Content-Type';
  //   // headers["Access-Control-Allow-Methods"] = '*';
  //   headers["Access-Control-Allow-Headers"] = 'X-Requested-With';//'Content-Type, Accept, X-Requested-With, remember-me';
  //   //headers["HTTP/1.1 200 OK"];
  //   //headers["Access-Control-Allow-Credentials"] = true;
  //   //headers["Content-Type"] = "text/html; charset=utf-8";

  //   return headers;
  // }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
      console.log(message);
    }
}
