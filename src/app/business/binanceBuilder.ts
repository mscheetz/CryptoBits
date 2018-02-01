import { BinanceOrder } from "../classes/binance/binanceOrder";
import { Transaction } from "../classes/cryptoBits/transaction";
import { CoinInformation } from "../classes/cryptoBits/coinInfo";
import { AccountData } from "../classes/binance/accountData";
import { BinanceApi } from "../apiAccess/binanceApi";
import { Deposit } from "../classes/binance/deposit";
import { Helper } from "./helper";
import { Withdraw } from "../classes/binance/withdraw";
import { Location } from "../classes/cryptoBits/location";

/**
 * Build binance information to CryptoBits information
 */
export class BinanceBuilder {
    private _api;
    private _helper;

    constructor(apiKey: string, apiSecret: string) {
        this._api = new BinanceApi(apiKey, apiSecret);
        this._helper = new Helper();
    }

    /**
     * Gather binance information
     */
    public GatherBinanceInfo(): CoinInformation[] {
        let coins: CoinInformation[] = [];
        
        coins = this.GetAccountData();

        let trx: Transaction[] = this.GetOrders();
        let deposits: Transaction[] = this.GetDeposits();
        let withdraws: Transaction[] = this.GetWithdraws();

        for(let coin of coins) {
            coin.transactions = trx.filter(t => t.symbol === coin.symbol);
            coin.transactions.concat(deposits.filter(d => d.symbol === coin.symbol));
            coin.transactions.concat(withdraws.filter(w => w.symbol === coin.symbol));

            trx = trx.filter(function(t){
                return t.symbol !== coin.symbol;
            })
            deposits = deposits.filter(function(d){
                return d.symbol !== coin.symbol;
            })
            withdraws = withdraws.filter(function(w){
                return w.symbol !== coin.symbol;
            })
        }

        if (trx.length > 0) {
            let newCoins = trx.map(function(t) {
                return t.symbol;
            });

            for(let newCoin of newCoins) {
                let coin: CoinInformation;
                coin.symbol = newCoin;
                coin.location = String(Location.Binance);
                coin.quantity = 0;
                coin.transactions = trx.filter(t => t.symbol === newCoin);
                coin.transactions.concat(deposits.filter(d => d.symbol === newCoin));
                coin.transactions.concat(withdraws.filter(w => w.symbol === newCoin));
                coins.push()
            
                trx = trx.filter(function(t){
                    return t.symbol !== newCoin;
                })
                deposits = deposits.filter(function(d){
                    return d.symbol !== newCoin;
                })
                withdraws = withdraws.filter(function(w){
                    return w.symbol !== newCoin;
                })
            }
        }

        return coins;
    }

    public GetAccountData(): CoinInformation[] {
        let account: AccountData;
        
        this._api.getAccountData().then(result => account = result);

        return this.BinanceCoinConvert(account);
    }

    public GetOrders(): Transaction[] {
        let orders: BinanceOrder[];

        this._api.getOrders().then(response => orders = response);

        return this.BinanceTrxConvert(orders);
    }

    public GetDeposits(): Transaction[] {
        let deposits: Deposit[];

        this._api.GetDeposits().then(response => deposits = response);

        return this.BinanceDepositConvert(deposits);
    }

    public GetWithdraws(): Transaction[] {
        let withdraws: Withdraw[];

        this._api.GetWithdraws().then(response => withdraws = response);

        return this.BinanceWithdrawConvert(withdraws);
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
            coin.location = String(Location.Binance);
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

    /**
     * Converts a binance deposit array to transaction array
     * 
     * @param deposits        Binance Deposit array
     */
    public BinanceDepositConvert(deposits: Deposit[]): Transaction[] {
        let trxList: Transaction[] = [];

        for(let deposit of deposits){
            let trx: Transaction;
            trx.symbol = deposit.asset;
            trx.type = "DEPOSIT";
            trx.date = this._helper.GetDateFromUnix(deposit.insertTime);
            trx.quantity = deposit.amount;
            trx.trx_id = deposit.txId;
            trx.trx_source = deposit.address;

            trxList.push(trx);
        }
        return trxList;
    }

    /**
     * Converts a binance withdraw array to transaction array
     * 
     * @param withdraws        Binance Withdraw array
     */
    public BinanceWithdrawConvert(withdraws: Withdraw[]): Transaction[] {
        let trxList: Transaction[] = [];

        for(let withdraw of withdraws){
            let trx: Transaction;
            trx.symbol = withdraw.asset;
            trx.type = "WITHDRAW";
            trx.date = this._helper.GetDateFromUnix(withdraw.applyTime);
            trx.quantity = withdraw.amount;
            trx.trx_id = withdraw.txId;
            trx.trx_source = withdraw.address;

            trxList.push(trx);
        }
        return trxList;
    }
}