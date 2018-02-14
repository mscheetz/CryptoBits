import { Component } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
//import 'application/x-www-form-urlencoded';
import { RequestOptions } from '@angular/http/src/base_request_options';
import { RestApi } from './restApi';
import { HttpMethod } from "blocking-proxy/built/lib/webdriver_commands";
import { isNullOrUndefined } from 'util';
import { CryptoJS } from "crypto-js";
import { Coin } from "../classes/99Crypto/coin";

export class NinetyNineCryptoApi {
  
  private apiBase = 'https://api.99cryptocoin.com';
  private apiComplete = '';
  private headers;
  private options;
  private restApi;
  data: any = {};

  constructor() {
    this.restApi = new RestApi();

    console.log('99 Crypto Coin APIs');
  }

  /**
   *  Get coin name/symbol.
   */
  public async getCoins(): Promise<Coin[]>{
    let url = this.apiBase + "/v1/coins";

    let results: any = await this.nnccRequest(
      'GET',
      url,
      false
    );

    return results.result;
  }

  /**
   * Request a 99 Crypto Coin api
   * 
   * @param httpMethod      Http Method type
   * @param url             Url to access
   * @param secured         Is the request secured?
   * @param parameters      Optional query parameters
   */
  private async nnccRequest(
    httpMethod: string,
    url: string,
    secured: boolean,
    ...parameters: [ string, any ][]): Promise<any>{
      
      let uri: URL = new URL(
        url,
        this.apiBase
      );

      for(let parameter of parameters){
        if(isNullOrUndefined(parameter[1])){
          continue;
        }
        uri.searchParams.append(parameter[0], parameter[1].toString());
      }

      let headers: any = this.GetHeaders(url);

      return await this.restApi.apiRequest(
        httpMethod,
        uri.href,
        headers
      );

  }

  private GetHeaders(url: string):any {    
    let headers: any = {};

    headers["Access-Control-Allow-Origin"] = '*';
    headers["Access-Control-Allow-Methods"] = 'GET';
    headers["Access-Control-Allow-Headers"] = 'X-Requested-With,content-type';
    headers["Access-Control-Allow-Credentials"] = true;

    return headers;

  }
}
