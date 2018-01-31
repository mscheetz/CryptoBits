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
import { OrderDetailData } from '../classes/kucoin/orderDetailData';
import { Tick } from '../classes/kucoin/tick';
import { Balance } from '../classes/kucoin/balance';
import { CoinBalance } from '../classes/kucoin/coinBalance';
import { DepositWithdraw } from '../classes/kucoin/depositWithdraw';
import { DepositWithdrawType } from '../classes/kucoin/depositWithdrawType';
import { OrderDetail } from '../classes/kucoin/orderDetail';
import { TickData } from '../classes/kucoin/tickData';

export class KucoinApi {
  
  private apiKey: string;
  private apiSecret: string;
  private apiBase = 'https://api.kucoin.com';
  private apiComplete = '';
  private headers;
  private options;
  private restApi;
  data: any = {};

  constructor(apiKey?: string, apiSecret?: string) {
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
    this.restApi = new RestApi();

    console.log('KuCoin APIs');
  }

  /**
   * Get all account orders; active, canceled, or filled.
   */
  public async getOrders(
    symbol: string,
    page?: number,
    limit?: number): Promise<OrderDetailData> {
    
    let url = this.apiBase + "/v1/deal-orders";
    if(page === null)
      page = 1;
    if(limit === null)
      limit = 100;

    let results: any = await this.kucoinRequest(
      'GET',
      url,
      true,
      ["symbol", symbol],
      ["page", page],
      ["limit", limit]
    )

    return results.data;
  }

  /**
   * Get current account balances.
   */
  public async getAccountData(): Promise<Balance>{
    let url = this.apiBase + "/v1/account/balances";

    return new Balance(
      await this.kucoinRequest(
        'GET',
        url,
        true,
        ["limit", 20]
      ));
  }

  /**
   * Get Deposit/Withdraw information.
   * 
   * @param symbol        Symbol of coin
   * @param type          Type of transaction
   * @param page          Optional page number
   */
  public async getDepositWithdraw(
    symbol: string, 
    type: DepositWithdrawType,
    page?: number): Promise<DepositWithdraw>{
    let url = this.apiBase + "/v1/account/"+ symbol + "/wallet/records";

    if(page === null)
      page = 1;

    return new DepositWithdraw(
      await this.kucoinRequest(
        'GET',
        url,
        true,
        ["type", type],
        ["status", "FINISHED"],
        ["page", page]
      ));
  }

  /**
   *  Get best price/qty on the order book for a symbol or symbols.
   * 
   * @param symbol      Optional symbol
   */
  public async getTickers(symbol?: string): Promise<Tick>{
    let url = this.apiBase + "/v1/open/tick";

    let results: any = await this.kucoinRequest(
      'GET',
      url,
      false,
      ["symbol", symbol]
    );

    return results;
  }

  /**
   * Request a KuCoin api
   * 
   * @param httpMethod      Http Method type
   * @param url             Url to access
   * @param secured         Is the request secured?
   * @param parameters      Optional query parameters
   */
  private async kucoinRequest(
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

      let headers: any = this.kucoinAuth(uri, secured);

      return await this.restApi.apiRequest(
        httpMethod,
        uri.href,
        headers
      );

  }

  /**
   * KuCoin Api Authorization
   * 
   * @param url             The url requested
   * @param secure          Is security required for the request?
   */
  private kucoinAuth(
    url: URL,
    secure: boolean): any {
      let headers: any = {};

      if(isNullOrUndefined(this.apiKey)){
        // throw error
      }
      let nonce = new Date().getTime().toString();

      headers["KC-API-KEY"] = this.apiKey;
      headers["KC-API-NONCE"] = nonce;

      if(secure){

        if(isNullOrUndefined(this.apiSecret)){
          // throw error
        }

        let signString = url.pathname + "/" + nonce + "/" + url.search;
        signString = new Buffer(signString).toString('base64');

        let hmac = CryptoJS.HmacSHA256(this.apiSecret);
        hmac.setEncoding('hex');
        hmac.write(signString);
        hmac.end();
        
        headers["KC-API-SIGNATURE"] = hmac.read();
      }

      return headers;
  }
}
