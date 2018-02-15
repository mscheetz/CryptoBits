import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ApiInformation } from '../../classes/cryptoBits/apiInfo';
import { Location } from '../../classes/cryptoBits/location';
import { CoinInformation } from '../../classes/cryptoBits/coinInfo';
import { DisplayCoin } from '../../classes/cryptoBits/displayCoin';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css']
})

export class CryptoComponent {
  @Input() private coins: DisplayCoin[];

  constructor() { 
  }
  
}
