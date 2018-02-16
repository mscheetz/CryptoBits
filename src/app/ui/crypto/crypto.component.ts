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
  styleUrls: ['./crypto.component.css']
})

export class CryptoComponent {
  private userService: UserService;
  //@Input() private coins: DisplayCoin[];
  private coins: DisplayCoin[];

  constructor() { }

  ngOnInit() {
    this.userService = new UserService();
    // this.userService.GetDisplayCoins.subscribe(data => {
    //   this.coins = data
    // });
  }
  
}
