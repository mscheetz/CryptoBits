import { Component } from '@angular/core';
import { Wallet } from '../classes/coinbase/wallet';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  
  export class CoinbaseApi {
    private coinbase = require('coinbase');
    private client: any;
  
    constructor(apiKey?: string, apiSecret?: string) {
  
      this.client = new this.coinbase.Client({'apiKey': apiKey, 'apiSecret': apiSecret});
      console.log('Coinbase APIs');
    }

    public async GetAccounts(): Promise<Wallet[]>{
        let reponse = this.client.getAccount();

        let accounts: Wallet[] = [];
        for(let result of reponse){
            accounts.push(new Wallet(result));
        }
        return accounts
    }
}