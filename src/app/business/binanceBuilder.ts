import { BinanceOrder } from "../classes/binance/binanceOrder";
import { Transaction } from "../classes/cryptoBits/transaction";
import { AccountData } from "../classes/binance/accountData";
import { BinanceApi } from "../apiAccess/binanceApi";
import { Deposit } from "../classes/binance/deposit";
import { Helper } from "./helper";
import { Withdraw } from "../classes/binance/withdraw";
import { Location } from "../classes/cryptoBits/location";
import { ApiCoin } from "../classes/cryptoBits/apiCoin";

/**
 * Build binance information to CryptoBits information
 */
export class BinanceBuilder {
    private _api;
    private _helper;
    private _coins: ApiCoin[];
    private _transactions: Transaction[];

    constructor(apiKey: string, apiSecret: string) {
        this._api = new BinanceApi(apiKey, apiSecret);
        this._helper = new Helper();
        this._coins = [];
        this._transactions = [];
    }

    /**
     * Gather binance information
     */
    public GatherBinanceInfo() {
        this.CombineTransactionData();
        this.GetAccountData();
        this.CreateCoinsFromTrx();
    }

    /**
     * Get Coins from Binance Apis
     */
    public GetCoins(): ApiCoin[] {
        return this._coins;
    }

    /**
     * Get Transactions from Binance Apis
     */
    public GetTrx(): Transaction[] {
        return this._transactions;
    }

    /**
     * Combine all transaction data
     */
    public CombineTransactionData() {
        let trx: Transaction[] = this.GetOrders();
        let deposits: Transaction[] = this.GetDeposits();
        let withdraws: Transaction[] = this.GetWithdraws();
        
        this._transactions.concat(trx);
        this._transactions.concat(deposits);
        this._transactions.concat(withdraws);
    }

    /**
     * Create new CoinInformation objects from transactions
     */
    public CreateCoinsFromTrx() {
        let newCoins = this._helper.Unique(this._transactions, "symbol");

        for(let coin of this._coins) {
            let idx = newCoins.indexOf(coin.symbol);
            if(idx >= 0) {
                newCoins.splice(idx, 1);
            }
        }

        for(let coin of newCoins) {
            let nCoin = new ApiCoin;
            nCoin.symbol = coin;
            nCoin.quantity = 0;
            nCoin.frozen = 0;
            nCoin.location = Location.Binance;

            this._coins.push(nCoin);
        }
    }

    /**
     * Get Binance AccountData from api and return CoinInformation
     */
    public GetAccountData(): ApiCoin[] {
        let account: AccountData;
        
        this._api.getAccountData().then(result => account = result);

        return this.BinanceCoinConvert(account);
    }

    /**
     * Get BinanceOrders from api and return Tranactions
     */
    public GetOrders(): Transaction[] {
        let orders: BinanceOrder[];

        this._api.getOrders().then(response => orders = response);

        return this.BinanceTrxConvert(orders);
    }

    /**
     * Get Binance Deposits from api and return Transactions
     */
    public GetDeposits(): Transaction[] {
        let deposits: Deposit[];

        this._api.GetDeposits().then(response => deposits = response);

        return this.BinanceDepositConvert(deposits);
    }

    /**
     * Get Binance Withdraws from api and return Transactions
     */
    public GetWithdraws(): Transaction[] {
        let withdraws: Withdraw[];

        this._api.GetWithdraws().then(response => withdraws = response);

        return this.BinanceWithdrawConvert(withdraws);
    }

    /**
     * Converts binance Accountdata to ApiCoin
     * 
     * @param coins         Binance AccountData
     */
    public BinanceCoinConvert(coins: AccountData): ApiCoin[] {
        let coinList: ApiCoin[] = [];

        for(let balance of coins.balances) {
            let coin: ApiCoin;
            coin.symbol = balance.asset;
            coin.location = Location.Binance;
            coin.quantity = balance.available
            coin.frozen = balance.locked;

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