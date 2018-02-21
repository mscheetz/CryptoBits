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
import { ApiInformation } from "../classes/cryptoBits/apiInfo";
import { ApiCoin } from "../classes/cryptoBits/apiCoin";
import { CoinWallet } from "../classes/cryptoBits/coinWallet";
import { Coin } from "../classes/99Crypto/coin";
import { Helper } from "./helper";
import { NinetyNineCryptoApi } from "../apiAccess/ninetyNineCryptoApi";
import { CoindarApi } from "../apiAccess/coindarApi";
import { CoinMarketCapApi } from "../apiAccess/coinMarketCapApi";
import { Ticker } from "../classes/coinMarketCap/ticker";
import { CoinTicker } from "../classes/cryptoBits/coinTicker";
import { CoindarBuilder } from "./coindarBuilder";

export class CryptoGetter {

    private _user: User;
    private _trx: Transaction[] = [];
    private _apiCoins: ApiCoin[] = [];
    private _coinInfo: CoinInformation[] = [];
    private _ticker: Ticker[];
    private _allCoins: Coin[];
    private _helper: Helper;

    constructor(user: User) {
        this._user = user;
        this._helper = new Helper;
    }

    /**
     * Returns an updated user.
     */
    public GetUser(): User {
        return this._user;
    }

    /**
     * Get Exchange info
     * 
     * @param getApi        (optional) Exchange to get info from
     */
    public GetExchangeInfo(getApi?: ApiInformation) {
        let apis: ApiInformation[] = [];

        if(getApi === null){
            apis = this._user.apiInfo;
        } else {
            apis.push(getApi);
        }
        apis.forEach((api) => {
            switch(api.source) {
                case Location.Binance:
                    this.GetBinanceInfo();
                    break;
                case Location.Coinbase:
                    break;
                case Location.Kucoin:
                    break;
            }
        })

        this.SetCoinInfo();
        this.UpdateCoinInfo();
    }

    /**
     * Gat binance information
     */
    public GetBinanceInfo() {
        let api = this._user.apiInfo.find(api => api.source === Location.Binance);

        let binanceBuilder = new BinanceBuilder(api.apiKey, api.apiSecret);

        this._apiCoins.concat(binanceBuilder.GetCoins());
        this._trx.concat(binanceBuilder.GetTrx());
    }

    /**
     * Set User.CoinInfo to ApiCoins
     */
    public SetCoinInfo() {
        this._user.coinInfo = this.ApiCoinToCoinInfo();
    }

    /**
     * Update coin names images, etc
     */
    public UpdateCoinInfo() {
        this.GetAllCoins();
        this.GetTickers();
        this.SetCoinProperties();
        this.GetCoinCalendars();
    }

    /**
     * Get all coin names/symbols
     */
    GetAllCoins() {
        let nintyNineBuilder = new NinetyNineCryptoApi();

        nintyNineBuilder.getCoins().subscribe(data =>  {
            this._allCoins = data 
        });
    }

    /**
     * Get coin ticker information.
     */
    public GetTickers() {
        let coinMarketCap = new CoinMarketCapApi();
        
        coinMarketCap.getTickers().then(result => this._ticker = result);
    }

    /**
     * Set coin name if null
     */
    public SetCoinProperties() {
        for(let coin of this._coinInfo) {
            if(coin.name === null) {
                coin.name = this._allCoins.find(a => a.symbol === coin.symbol).name;
            }
            let coinTicker: CoinTicker;
            let ticker: Ticker = this._ticker.find(t => t.symbol === coin.symbol);
            if(ticker !== null) {
                coinTicker.available_supply = +ticker.available_supply;
                coinTicker.coin_24h_volume_usd = +ticker.c24h_volume_usd;
                coinTicker.last_updated = +ticker.last_update;
                coinTicker.market_cap_usd = +ticker.market_cap_usd;
                coinTicker.max_supply = +ticker.max_supply;
                coinTicker.percent_change_1h = +ticker.percent_change_1h;
                coinTicker.percent_change_24h = +ticker.percent_change_24h;
                coinTicker.percent_change_7d = +ticker.percent_change_7d;
                coinTicker.price_btc = +ticker.price_btc;
                coinTicker.price_usd = +ticker.price_usd;
                coinTicker.rank = +ticker.rank;
                coinTicker.total_supply = +ticker.total_supply;
                coin.ticker = coinTicker;
            }
        }
    }

    /**
     * Get coinEvents for each coin
     */
    public GetCoinCalendars() {
        let coindar = new CoindarBuilder();
        
        this._coinInfo.forEach(coin => {
            coin.events = coindar.GetCoindarInfo(coin.symbol);
        });
    }

    /**
     * Convert ApiCoin[] to CoinInformation[]
     */
    public ApiCoinToCoinInfo(): CoinInformation[] {
        let coinInfo: CoinInformation[] = [];
        for(let coin of this._apiCoins) {
            let wallet = new CoinWallet;
            wallet.quantity = coin.quantity;
            wallet.frozen = coin.frozen;
            wallet.location = coin.location;

            if(this._helper.ArrayContains(this._coinInfo, "symbol", coin.symbol)) {
                let coinI = new CoinInformation;
                coinI.symbol = coin.symbol;
                coinI.wallet = [];
                coinI.wallet.push(wallet);
    
                coinInfo.push(coinI);
            } else {
                let i = this._helper.GetIndex(this._coinInfo, "symbol", coin.symbol);

                for(let coinWallet of this._coinInfo[i].wallet) {
                    if(coinWallet.location === wallet.location) {
                        coinWallet.frozen = wallet.frozen;
                        coinWallet.quantity = wallet.quantity;
                    }
                }
            }
        }
        return coinInfo;
    }
}