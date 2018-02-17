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

@Injectable()
export class UserService {
    user: User;    
    coinList: Observable<DisplayCoin[]>;
    // private _coins: BehaviorSubject<DisplayCoin[]>;
    // private coinStore: {
    //     coins: DisplayCoin[]
    // };
    private subject = new Subject<any>();

    constructor() {
        // this.coinStore = { coins: [] };
        // this._coins = <BehaviorSubject<DisplayCoin[]>>new BehaviorSubject([]);
        // this.coinList = this._coins.asObservable();
        this.setDefaultUser();
    }

    createUser(first: string, last: string, email: string,  ){
        this.user = new User(UUID.UUID(), email, first, last, [], [], [], []);        
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
          []                    // watchlist
        );
    }

    getUser(): Observable<User> {
        return of(this.user);
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

    newTransaction(newTrx: Transaction){
        this.user.transaction.push(newTrx);
    
        let wallet: CoinWallet = new CoinWallet();
        wallet.quantity = newTrx.quantity;
        wallet.location = Location.Wallet;
    
        let newCoin: CoinInformation = new CoinInformation();
        newCoin.name = newTrx.symbol;
        newCoin.symbol = newTrx.symbol;
        newCoin.wallet = [];
        newCoin.wallet.push(wallet);
    
        let myCoin: CoinInformation = this.user.coinInfo.find(c => c.symbol === newCoin.symbol);
    
        if(myCoin == null){
          this.user.coinInfo.push(newCoin);
        } else {
          this.user.coinInfo.forEach(function(coin){
            if(coin.symbol === newCoin.symbol) {
              for(var i = 0; i< coin.wallet.length; i++){
                let coinFound: boolean = false;
                if(coin.wallet[i].location === wallet.location){
                  let newQty = coin.wallet[i].quantity + wallet.quantity;
                  coin.wallet[i].location = newQty;
                  coinFound = true;
                }
                if(!coinFound) {
                  coin.wallet.push(wallet);
                }
              }
            }
          });
        }
        this.updateDisplayCoins();
    }

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
                for(var ii = 0; ii < myCoin.wallet.length; ii ++) {
                    let wallet = {
                    frzn: Number(myCoin.wallet[i].frozen),
                    qty: Number(myCoin.wallet[i].quantity)
                    }
                    quantity += wallet.frzn + wallet.qty;
                }
                coin.quantity = quantity;

                coins.push(coin);
            }
        }
        this.subject.next({ coins: coins });
    }
}