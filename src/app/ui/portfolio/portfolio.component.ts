import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { CryptoGetter } from '../../business/cryptoGetter';
import { User } from '../../classes/cryptoBits/User';
import { ApiInformation } from '../../classes/cryptoBits/apiInfo';
import { Coin } from '../../classes/99Crypto/coin';
import { NinetyNineCryptoApi } from '../../apiAccess/ninetyNineCryptoApi';
import { CoinInformation } from '../../classes/cryptoBits/coinInfo';
import { Transaction } from '../../classes/cryptoBits/transaction';
import { CoinWallet } from '../../classes/cryptoBits/coinWallet';
import { Location } from '../../classes/cryptoBits/location';
import { DisplayCoin } from '../../classes/cryptoBits/displayCoin';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  private portfolioTitle = 'Portfolio';
  private cryptoBits;
  private allCoins: Coin[];
  private user: User;
  private myCoins: CoinInformation[];
  private coins: DisplayCoin[] = [];

  constructor() {
    //this.GetAllCoins();
    this.SetDefaultUser();
    this.portfolioTitle = 'Hello, ' + this.user.first + ' ' + this.user.last;
    this.myCoins = this.user.coinInfo;
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
  
  /**
   * name
   */
  public GetAllCoins() {
    let c99Getter = new NinetyNineCryptoApi();

    c99Getter.getCoins().then(result => this.allCoins = result);
  }

  public AddedApi(newApi: ApiInformation){
    this.user.apiInfo.push(newApi);
    console.log(this.user.apiInfo);
  }

  public NewTrx(newTrx: Transaction){
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
    this.BuildDisplayCoins();
  }
  
  public BuildDisplayCoins() {
    if(this.user.coinInfo.length === 0)
      return;


    this.user.coinInfo.forEach(function(myCoin) {
      let coin = new DisplayCoin();
      coin.symbol = myCoin.symbol;
      coin.name = myCoin.name;
      coin.ticker = myCoin.ticker;
      coin.locations = myCoin.wallet.length;
      let quantity:number = 0;
      for(var i = 0; i < myCoin.wallet.length; i ++) {
        let wallet = {
          frzn: Number(myCoin.wallet[i].frozen),
          qty: Number(myCoin.wallet[i].quantity)
        }
        quantity += wallet.frzn + wallet.qty;
      }
      coin.quantity = quantity;

      this.coins.push(coin);
    });
  }

  public NewTransaction(){

  }
  ngOnInit() {

  }
}
