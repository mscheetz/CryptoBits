import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { CryptoGetter } from '../../business/cryptoGetter';
import { User } from '../../classes/cryptoBits/User';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolioTitle = 'Portfolio';
  private cryptoBits;
  private user: User;

  constructor() { 
    this.SetDefaultUser();
  }

  public SetDefaultUser(){
    this.user = new User(
      '1',                    // id
      'mfscheetz@gmail.com',  // email
      'Matt',                 // first
      'Scheetz',              // last
      null,                   // api info
      null,                   // coin info
      null,                   // transactions
      null                    // watchlist
    );
  }
  
  ngOnInit() {

  }
}
