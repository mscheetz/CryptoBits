import { User } from "../classes/cryptoBits/User";
import { UUID } from 'angular2-uuid';
import { DisplayCoin } from "../classes/cryptoBits/displayCoin";
import { Transaction } from "../classes/cryptoBits/transaction";
import { CoinWallet } from "../classes/cryptoBits/coinWallet";
import { CoinInformation } from "../classes/cryptoBits/coinInfo";
import { Location } from "../classes/cryptoBits/location";
import { Observable, BehaviorSubject } from "rxjs";
import { Subject } from "rxjs/Subject";
import { Injectable } from "@angular/core";
import { of } from "rxjs/observable/of";
import { NinetyNineCryptoApi } from "../apiAccess/ninetyNineCryptoApi";
import { Coin } from "../classes/99Crypto/coin";
import { CryptoCompareApi } from "../apiAccess/cryptoCompareApi";
import { CryptoCompareCoin } from "../classes/cryptoCompare/CryptoCompareCoin";
import { Wallet } from "../classes/cryptoBits/wallet";
import { TrxType } from "../classes/cryptoBits/trxType";
import { CoinBuy } from "../classes/cryptoBits/coinBuy";
import { CoinSale } from "../classes/cryptoBits/coinSale";

@Injectable()
export class UserService {
    user: User;    
    coinList: Observable<DisplayCoin[]>;
    allCoins: Coin[] = [];
    ccCoins: CryptoCompareCoin[] = [];
    // private _coins: BehaviorSubject<DisplayCoin[]>;
    // private coinStore: {
    //     coins: DisplayCoin[]
    // };
    private subject = new Subject<any>();
    private coinListAnnouncedSource = new Subject<DisplayCoin[]>();
    
    coinListAnnounced$ = this.coinListAnnouncedSource.asObservable();
    
    constructor(private c99Getter: NinetyNineCryptoApi, private cryptoCompare: CryptoCompareApi) {
        // this.coinStore = { coins: [] };
        // this._coins = <BehaviorSubject<DisplayCoin[]>>new BehaviorSubject([]);
        // this.coinList = this._coins.asObservable();
        this.setDefaultUser();
        //this.getCCCoins();
       // this.getAllCoins();
       // this.getAllCoins();
    }

    createUser(first: string, last: string, email: string,  ){
        this.user = new User(UUID.UUID(), email, first, last, [], [], [], [], []);        
    }
    
    getCCCoins() {
        this.cryptoCompare.getCoins().subscribe(coins => { this.ccCoins = coins });
    }

    getAllCoins() {
        //let c99Getter = new NinetyNineCryptoApi();

        this.c99Getter.getCoins()
            .subscribe(coins => { this.allCoins = coins });
    }

    setDefaultUser(){
        this.user = new User(
          '1',                    // id
          'mfscheetz@gmail.com',  // email
          'Matt',                 // first
          'Scheetz',              // last
          [],                   // api info
          [],                   // coin info
          [],                   // transactions
          [],                    // watchlist
          []                    // displayCoins
        );
    }

    getUser(): Observable<User> {
        return of(this.user);
    }

    announceDisplayCoins() {
        this.coinListAnnouncedSource.next();
    }

    getDisplayCoins(): Observable<any> {//: Observable<DisplayCoin[]> {
        //return of(this.coins);
        // return new Observable(observer => {
        //     //this.coins;
        //     observer.next(this.coins);            
        //   });/
        //return this._coins.next(Object.assign({}, this.coinStore).coins);
        return this.subject.asObservable();
    }

    /**
     * Process a new transaction
     * @param newTrx        New Transaction
     */
    newTransaction(newTrx: Transaction){
        this.user.transaction.push(newTrx);

        let newCoin: CoinInformation = this.getCoin(newTrx);

        let myCoin: CoinInformation = this.user.coinInfo.find(c => c.symbol === newCoin.symbol);
    
        if(!myCoin) {
          this.user.coinInfo.push(newCoin);
        } else {
          this.user.coinInfo.forEach(function(coin){
            if(coin.symbol === newCoin.symbol) {
              //for(var i = 0; i< coin.wallet.length; i++){
              //  let coinFound: boolean = false;
                coin.wallet = newCoin.wallet;
              //  if(coin.wallet[i].location === newCoin.wallet.location){
              //    let newQty = Number(coin.wallet[i].quantity) + Number(wallettt.quantity);
              //    coin.wallet[i].quantity = newQty;
              //    coinFound = true;
              //  }
              //  if(!coinFound) {
              //    coin.wallet.push(wallettt);
              //  }
              //}
            }
          });
        }
        this.updateDisplayCoins();
    }

    /**
     * Get a coin for a new transaction
     * @param newTrx        New Transaction
     */
    getCoin(newTrx: Transaction): CoinInformation {
        let idx: number = this.user.coinInfo.findIndex(c => c.symbol === newTrx.symbol);

        let coin: CoinInformation;

        if(idx < 0) {
            coin = this.createCoin(newTrx);
        } else {
            coin = this.user.coinInfo[idx];

            let walletIdx: number = this.getWalletIndex(coin, newTrx.sourceLocation);

            if (walletIdx < 0) {
                let buys: CoinBuy[] = this.createCoinBuys(newTrx);
                let newWallet = this.createCoinWallet(newTrx, buys);
                
                coin.wallet.push(newWallet);
            } else {
                let buy: CoinBuy = this.createCoinBuy(newTrx);

                coin.wallet[walletIdx].coinBuy.push(buy);
            }
        }

        return coin;
    }

    /**
     * Get Index of a wallet for a coin for a new transaction
     * @param coin          Current Coin
     * @param location      New Transaction Source Location
     */
    getWalletIndex(coin: CoinInformation, location: Location): number {
        let idx: number = coin.wallet.findIndex(w => w.location === location);

        return idx; 
    }

    /**
     * Create a coin for a new transaction
     * @param newTrx        New Transaction
     */
    createCoin(newTrx: Transaction): CoinInformation {
        let coin: CoinInformation = new CoinInformation();
        let buys: CoinBuy[] = this.createCoinBuys(newTrx);
        let wallets: Wallet[] = [];
        wallets.push(this.createCoinWallet(newTrx, buys));

        coin.name = newTrx.name;
        coin.symbol = newTrx.symbol;
        coin.wallet = wallets;

        return coin;
    }

    /**
     * Create a wallet for a new transaction
     * @param newTrx        New Transaction
     * @param buys          CoinBuy array
     */
    createCoinWallet(newTrx: Transaction, buys: CoinBuy[]): Wallet {
        let wallet: Wallet = new Wallet();
        wallet.location = newTrx.sourceLocation;
        wallet.name = Location[newTrx.sourceLocation];
        wallet.coinBuy = buys;

        return wallet;
    }

    /**
     * Create a coin sale for a new transaction
     * @param newTrx        New Transaction
     * @param saleQuantity  Sale quantity
     */
    createCoinSale(newTrx: Transaction, saleQuantity: number): CoinSale {
        let sale: CoinSale = new CoinSale();
        sale.date = newTrx.date;
        sale.fee = newTrx.fee;
        sale.feeSymbol = newTrx.feeSymbol;
        sale.pair = newTrx.pair;
        sale.price = newTrx.price;
        sale.quantity = saleQuantity;
        sale.trxType = newTrx.trxType;

        return sale;
    }

    /**
     * Create a CoinBuy array for a new transaction
     * @param newTrx        New Transaction
     */
    createCoinBuys(newTrx: Transaction): CoinBuy[] {
        let buys: CoinBuy[] = [];
        buys.push(this.createCoinBuy(newTrx));

        return buys;
    }

    /**
     * Create a coin buy for a new transaction
     * @param newTrx        New Transaction
     */
    createCoinBuy(newTrx: Transaction): CoinBuy {
        let buy: CoinBuy = new CoinBuy();
        buy.date = newTrx.date;
        buy.fee = newTrx.fee;
        buy.feeSymbol = newTrx.feeSymbol;
        buy.pair = newTrx.pair;
        buy.price = newTrx.price;
        buy.quantity = newTrx.quantity;
        buy.trxType = newTrx.trxType;
        buy.coinSell = [];

        return buy;
    }

    /**
     * Update display coins
     */
    updateDisplayCoins() {
        let coins = [];
        //this.coinStore = { coins: [] };
        if(this.user.coinInfo.length > 0) {
        //this.user.coinInfo.forEach(function(myCoin) {
            for(var i = 0; i< this.user.coinInfo.length; i ++) {
                let myCoin = this.user.coinInfo[i];
                let coin = new DisplayCoin();
                coin.symbol = myCoin.symbol;
                coin.name = myCoin.name;
                coin.ticker = myCoin.ticker;
                coin.locations = myCoin.wallet.length;
                let quantity:number = 0;
                let lowBuy: number = 0.00000000;
                let highBuy: number = 0.00000000;
                let avgBuy: number = 0.00000000;
                let totalBought: number = 0.0000000;
                for(var ii = 0; ii < myCoin.wallet.length; ii ++) {
                    for(var iii = 0; iii < myCoin.wallet[ii].coinBuy.length; iii ++) {
                        let coinBuy: CoinBuy = myCoin.wallet[ii].coinBuy[iii];
                        let buyPrice: number = Number(coinBuy.price);
                        let buyQty: number = Number(coinBuy.quantity);
                        if(buyQty !== 0){
                            if(lowBuy === 0 || lowBuy > buyPrice)
                                lowBuy = buyPrice;
                            
                            if(highBuy < buyPrice)
                                highBuy = buyPrice;
                            
                            totalBought += (buyPrice * buyQty);
                            quantity += buyQty;
                        }
                    }
                }
                avgBuy = Number(totalBought)/Number(quantity);
                coin.quantity = quantity;
                coin.low = lowBuy;
                coin.high = highBuy;
                coin.avg = avgBuy;

                coins.push(coin);
            }
        }
        this.user.displayCoins = coins;
        this.subject.next({ coins: coins });
    }
}