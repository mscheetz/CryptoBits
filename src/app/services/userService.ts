import { User } from "../classes/cryptoBits/User";
import { UUID } from 'angular2-uuid';
import { DisplayCoin } from "../classes/cryptoBits/displayCoin";
import { Transaction } from "../classes/cryptoBits/transaction";
import { CoinWallet } from "../classes/cryptoBits/coinWallet";
import { CoinInformation } from "../classes/cryptoBits/coinInfo";
import { Location } from "../classes/cryptoBits/location";
import { Observable, Subject } from "rxjs";

export class UserService {
    private user: User;
    private coins: DisplayCoin[];
    private coinsSubject: Subject<DisplayCoin[]> = new Subject();

    constructor() {
        this.coins = [];//this.coinsSubject.asObservable();
        this.SetDefaultUser();
    }

    public CreateUser(first: string, last: string, email: string,  ){
        this.user = new User(UUID.UUID(), email, first, last, [], [], [], []);        
    }

    public SetDefaultUser(){
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

    public GetUser(): User {
        return this.user;
    }

    public NewTransaction(newTrx: Transaction){
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
        this.UpdateDisplayCoins();
    }

    public UpdateDisplayCoins(): DisplayCoin[] {
        this.coins = []        
        if(this.user.coinInfo.length === 0)
            return;

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

            this.coins.push(coin);
        }//);
        this.coinsSubject.next(Object.assign({}, this.coins));
    }

    public GetDisplayCoins(): Observable<DisplayCoin[]> {
        return this.coinsSubject.asObservable();
    }
}