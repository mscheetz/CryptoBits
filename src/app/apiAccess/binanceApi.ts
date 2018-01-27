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
import { BinanceOrder } from '../classes/binance/binanceOrder';
import { AccountData } from '../classes/binance/accountData';
import { Ticker } from '../classes/binance/ticker';
import { Ticker24hr } from '../classes/binance/ticker24hr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class BinanceApi {
  
  private apiKey: string;
  private apiSecret: string;
  private apiBase = 'https://api.binance.com';
  private apiComplete = '';
  private headers;
  private options;
  private restApi;
  data: any = {};

  constructor(apiKey?: string, apiSecret?: string) {
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
    this.restApi = new RestApi();

    console.log('Binance APIs');
  }

  /**
   * Test connectivity to the Rest API and get the current server time.
   */
  public async getTime(): Promise<Date>{
    let url = this.apiBase + "/api/v1/time";

    return new Date(( await this.binanceRequest(
      'GET',
      url,
      false
    )).serverTime);
  }

  /**
   * Get all account orders; active, canceled, or filled.
   */
  public async getOrders(
    symbol?: string,
    id?: number,
    limit?: number): Promise<BinanceOrder[]> {
    
    let url = this.apiBase + "/api/v3/allOrders";
    let results: any = await this.binanceRequest(
      'GET',
      url,
      true,
      ["symbol", symbol],
      ["orderId", id],
      ["limit", limit]
    )

    let orders: BinanceOrder[] = [];
    for(let result of results){
      orders.push(new BinanceOrder(result));
    }
    return orders
  }

  /**
   * Get current account information.
   */
  public async getAccountData(): Promise<AccountData>{
    let url = this.apiBase + "/api/v3/account";

    return new AccountData(
      await this.binanceRequest(
        'GET',
        url,
        true
      ));
  }

  /**
   *  Get best price/qty on the order book for a symbol or symbols.
   * 
   * @param symbol      Optional symbol
   */
  public async getTickers(symbol?: string): Promise<Ticker[]>{
    let url = this.apiBase + "/api/v1/ticker/bookTicker";

    let results: any = await this.binanceRequest(
      'GET',
      url,
      false,
      ["symbol", symbol]
    );

    let tickers: Ticker[] = [];
    for(let result of results){
      tickers.push(new Ticker(result));
    }
    return tickers;
  }

  /**
   *  Get 24hr ticker price change statistics
   * 
   * @param symbol      Optional symbol
   */
  public async getTickers24hr(symbol?: string): Promise<Ticker24hr[]>{
    let url = this.apiBase + "/api/v1/ticker/24hr";

    let results: any = await this.binanceRequest(
      'GET',
      url,
      false,
      ["symbol", symbol]
    );

    let tickers: Ticker24hr[] = [];
    for(let result of results){
      tickers.push(new Ticker24hr(result));
    }
    return tickers;
  }


  /**
   * Request a binance api
   * 
   * @param httpMethod      Http Method type
   * @param url             Url to access
   * @param secured         Is the request secured?
   * @param parameters      Optional query parameters
   */
  private async binanceRequest(
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

      let headers: any = this.binanceAuth(uri, secured);

      return await this.restApi.apiRequest(
        httpMethod,
        uri.href,
        headers
      );

  }

  /**
   * Binance Api Authorization
   * 
   * @param url             The url requested
   * @param secure          Is security required for the request?
   */
  private binanceAuth(
    url: URL,
    secure: boolean): any {
      let headers: any = {};

      if(isNullOrUndefined(this.apiKey)){
        // throw error
      }
      headers["X-MBX-APIKEY"] = this.apiKey;

      if(secure){

        if(isNullOrUndefined(this.apiSecret)){
          // throw error
        }
        url.searchParams.append(
          "timestamp", 
          new Date().getTime().toString()
        );
        url.searchParams.append(
          "signagure", 
          CryptoJS.HmacSHA256(url.searchParams.toString(), this.apiSecret).toString()
        );
      }

      return headers;
  }
}
