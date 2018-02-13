import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { CryptoGetter } from '../../business/cryptoGetter';
import { User } from '../../classes/cryptoBits/User';
import { ApiInformation } from '../../classes/cryptoBits/apiInfo';
import { Coin } from '../../classes/99Crypto/coin';
import { NinetyNineCryptoApi } from '../../apiAccess/ninetyNineCryptoApi';

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

  constructor() {
    this.GetAllCoins();
    this.SetDefaultUser();
    this.portfolioTitle = 'Hello, ' + this.user.first + ' ' + this.user.last;
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

  public NewTransaction(){

  }
  ngOnInit() {

  }
}
