import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ApiInformation } from '../../classes/cryptoBits/apiInfo';
import { Location } from '../../classes/cryptoBits/location';
import { CoinInformation } from '../../classes/cryptoBits/coinInfo';
import { Transaction } from '../../classes/cryptoBits/transaction';
import { TrxType } from '../../classes/cryptoBits/trxType';
import { Coin } from '../../classes/99Crypto/coin';
import { UserService } from '../../services/userService';

@Component({
  selector: 'app-newTransaction',
  templateUrl: './newTransaction.component.html',
  styleUrls: ['./newTransaction.component.css']
})

export class NewTransactionComponent implements OnInit {
  private coinInfo: CoinInformation;
  private transaction: Transaction;
  private location: Location;
  private locs;
  private newTransaction: boolean = false;
  private trxType: TrxType;
  airdrop: boolean = false;
  ico: boolean = false;
  buy: boolean = false;
  sell: boolean = false;
  //@Output() NewTrx = new EventEmitter<Transaction>();
  @Input() private allCoins: Coin[];

  constructor(private userService: UserService) { 
    this.ToggleNewTrx(false);
    this.EnumToArray();
  }

  ngOnInit() {
    
  }
  
  EnumToArray() {
      this.locs = Object.keys(Location)
                        .filter(key => !isNaN(Number(Location[key])));
  }

  AddTransaction(){
      //this.AddedApi.emit(this.apiInfo);
      //console.log(this.apiInfo);
      this.transaction.type = TrxType[this.trxType];
      if(this.trxType === TrxType.SELL) {
        this.transaction.quantity = Number(this.transaction.quantity) * -1;
      }
      this.userService.newTransaction(this.transaction);
      this.ToggleNewTrx(false);
  }

  ResetTrx() {
    this.coinInfo = new CoinInformation();
    this.transaction = new Transaction();
    this.trxType = TrxType.NONE;
    this.ResetTrxType();
  }

  ResetTrxType() {
    this.ico = false;
    this.buy = false;
    this.sell = false;
    this.airdrop = false;
  }

  ToggleNewTrx(state: boolean) {
    this.ResetTrx();
    this.newTransaction = state;
  }

  SetTrxType(type: TrxType) {
    this.trxType = type;
    this.ResetTrxType();
    if(type === TrxType.ICO){
      this.ico = true;
    } else if (type === TrxType.AIRDROP) {
      this.airdrop = true;
    } else if (type === TrxType.BUY) {
      this.buy = true;
    } else if (type === TrxType.SELL) {
      this.sell = true;
    }
  }
}
