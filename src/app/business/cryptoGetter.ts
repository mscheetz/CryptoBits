import { User } from "../classes/cryptoBits/User";
import { BinanceOrder } from "../classes/binance/binanceOrder";
import { Transaction } from "../classes/cryptoBits/transaction";
import { retry } from "rxjs/operators/retry";
import { BinanceApi } from "../apiAccess/binanceApi";
import { errorHandler } from "@angular/platform-browser/src/browser";
import { CoinInformation } from "../classes/cryptoBits/coinInfo";
import { AccountData } from "../classes/binance/accountData";

export class CryptoGetter {

    private _user: User;

    constructor(user: User) {
        this._user = user;
    }

    public GetExchangeInfo() {

        let trx: Transaction[] = [];
        this._user.apiInfo.forEach((api) => {
            switch(api.source) {
                case "binance":
                    this.GatherBinanceInfo();
                    break;
                case "coinbase":
                    break;
                case "kucoin":
                    break;
            }
        })
    }

    /**
     * Gather binance information
     */
    public async GatherBinanceInfo() {
        let api = this._user.apiInfo.find(api => api.source === "binance");
        if (api !== null) {
            let binanceApi = new BinanceApi(api.apiKey, api.apiSecret);
            let orders: BinanceOrder[] = await binanceApi.getOrders()
                                                .then(result => result);

            let trx: Transaction[] = this.BinanceTrxConvert(orders);
            
            let account: AccountData = await binanceApi.getAccountData()
                                                .then(result => result);
            
            let coins: CoinInformation[];
        }
    }

    /**
     * Converts binance Accountdata to Coin information
     * 
     * @param coins         Binance AccountData
     */
    public BinanceCoinConvert(coins: AccountData): CoinInformation[] {
        let coinList: CoinInformation[] = [];

        for(let balance of coins.balances) {
            let coin: CoinInformation;
            coin.symbol = balance.asset;
            coin.location = "binance";
            coin.quantity = balance.available + balance.locked;

            coinList.push(coin);
        }

        return coinList;
    }

    /**
     * Converts a binance order array to transaction array
     * 
     * @param orders        BinanceOrder array
     */
    public BinanceTrxConvert(orders: BinanceOrder[]): Transaction[] {
        let trxList: Transaction[] = [];

        for(let order of orders){
            let trx: Transaction;
            trx.symbol = order.symbol.substr(0, order.symbol.length - 3);
            trx.pair = order.symbol.substr(-3);
            trx.type = String(order.type);
            trx.date = order.timestamp;
            trx.quantity = order.executedQuantity;
            trx.trx_id = String(order.id);
            trx.trx_source = "binance";

            trxList.push(trx);
        }
        return trxList;
    }

}