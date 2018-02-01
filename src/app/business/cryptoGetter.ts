import { User } from "../classes/cryptoBits/User";
import { BinanceOrder } from "../classes/binance/binanceOrder";
import { Transaction } from "../classes/cryptoBits/transaction";
import { retry } from "rxjs/operators/retry";
import { BinanceApi } from "../apiAccess/binanceApi";
import { errorHandler } from "@angular/platform-browser/src/browser";
import { CoinInformation } from "../classes/cryptoBits/coinInfo";
import { AccountData } from "../classes/binance/accountData";
import { Location } from "../classes/cryptoBits/location";
import { BinanceBuilder } from "./binanceBuilder";

export class CryptoGetter {

    private _user: User;

    constructor(user: User) {
        this._user = user;
    }

    public GetExchangeInfo() {

        let trx: Transaction[] = [];
        this._user.apiInfo.forEach((api) => {
            switch(api.source) {
                case Location.Binance:
                    this.GatherBinanceInfo();
                    break;
                case Location.Coinbase:
                    break;
                case Location.Kucoin:
                    break;
            }
        })
    }

    /**
     * Gather binance information
     */
    public GatherBinanceInfo(): CoinInformation[] {
        let api = this._user.apiInfo.find(api => api.source === Location.Binance);

        let binanceBuilder = new BinanceBuilder(api.apiKey, api.apiSecret);

        return binanceBuilder.GatherBinanceInfo();
    }
}