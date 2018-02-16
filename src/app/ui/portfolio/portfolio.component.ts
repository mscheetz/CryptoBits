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
import { UserService } from '../../services/userService';

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
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
    //this.GetAllCoins();
    //this.SetDefaultUser();
    this.user = this.userService.GetUser();
    this.portfolioTitle = 'Hello, ' + this.user.first + ' ' + this.user.last;
    this.myCoins = this.user.coinInfo;
  }

  // public SetDefaultUser(){
  //   this.user = new User(
  //     '1',                    // id
  //     'mfscheetz@gmail.com',  // email
  //     'Matt',                 // first
  //     'Scheetz',              // last
  //     [],                   // api info
  //     [],                   // coin info
  //     [],                   // transactions
  //     []                    // watchlist
  //   );
  // }
  
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
  
  ngOnInit() {

  }
}
