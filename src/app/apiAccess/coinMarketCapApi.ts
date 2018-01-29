import { Component } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'application/x-www-form-urlencoded';
import { RequestOptions } from '@angular/http/src/base_request_options';
import { RestApi } from './restApi';
import { HttpMethod } from "blocking-proxy/built/lib/webdriver_commands";
import { isNullOrUndefined } from 'util';
import { CryptoJS } from "crypto-js";
import { Ticker } from '../classes/coinMarketCap/ticker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class CoinMarketCapApi {
  
  private apiKey: string;
  private apiSecret: string;
  private apiBase = 'https://api.coinmarketcap.com';
  private apiComplete = '';
  private headers;
  private options;
  private restApi;
  data: any = {};

  constructor(apiKey?: string, apiSecret?: string) {
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
    this.restApi = new RestApi();

    console.log('Coin Market Cap APIs');
  }

  /**
   *  Get ticker for a specific coin.
   * 
   * @param symbol      Optional symbol
   */
  public async getTicker(
    symbol: string): Promise<Ticker>{
    let url = this.apiBase + "/v1/open/tick";

    let results: any = await this.cmcRequest(
      'GET',
      url,
      false,
      ["symbol", symbol]
    );

    return results;
  }

  /**
   *  Get ticker for all coins.
   */
  public async getTickers(): Promise<Ticker[]>{
    let url = this.apiBase + "/v1/open/tick";

    let results: any = await this.cmcRequest(
      'GET',
      url,
      false
    );

    return results;
  }

  /**
   * Request a Coin Market Cap api
   * 
   * @param httpMethod      Http Method type
   * @param url             Url to access
   * @param secured         Is the request secured?
   * @param parameters      Optional query parameters
   */
  private async cmcRequest(
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

      return await this.restApi.apiRequest(
        httpMethod,
        uri.href
      );

  }
}
