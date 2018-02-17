import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { ApiInformation } from '../../classes/cryptoBits/apiInfo';
import { Location } from '../../classes/cryptoBits/location';
import { CoinInformation } from '../../classes/cryptoBits/coinInfo';
import { DisplayCoin } from '../../classes/cryptoBits/displayCoin';
import { UserService } from '../../services/userService';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css'],
  //providers: [ UserService ]
})

export class CryptoComponent {//implements OnInit {
  coins: any;//Observable<DisplayCoin[]>;

  constructor(private userService: UserService) { 
    this.getCoins();
  }

  // ngOnInit() {
  //   //this.coins = this.userService.coins;
  //   this.getCoins();
  // }
  
  getCoins() {
    this.coins = this.userService.getDisplayCoins().subscribe(coins => { this.coins = coins; });
  }
}
