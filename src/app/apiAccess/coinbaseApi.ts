import { Component } from '@angular/core';
import { Wallet } from '../classes/coinbase/wallet';
import { TransactionData } from '../classes/coinbase/transactionData';
  
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

    public async GetBuys(account: string): Promise<TransactionData[]>{
        let response = this.client.getBuys(account);

        let transactions: TransactionData[] = [];
        for(let trx of response.data){
            transactions.push(trx);
        }
        return transactions;
    }

    public async GetSells(account: string): Promise<TransactionData[]>{
        let response = this.client.getSells(account);

        let transactions: TransactionData[] = [];
        for(let trx of response.data){
            transactions.push(trx);
        }
        return transactions;
    }

    public async GetDeposits(account: string): Promise<TransactionData[]>{
        let response = this.client.getDeposits(account);

        let transactions: TransactionData[] = [];
        for(let trx of response.data){
            transactions.push(trx);
        }
        return transactions;
    }

    public async GetWithdraws(account: string): Promise<TransactionData[]>{
        let response = this.client.getWithdraws(account);

        let transactions: TransactionData[] = [];
        for(let trx of response.data){
            transactions.push(trx);
        }
        return transactions;
    }
}