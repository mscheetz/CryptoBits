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
  private trxType: TrxType = TrxType.NONE;
  airdrop: boolean = false;
  ico: boolean = false;
  buy: boolean = false;
  sell: boolean = false;
  xfer: boolean = false;
  trxSymbol: string = "";
  trxLocation: Location = Location.None;
  available: number = 0;
  //@Output() NewTrx = new EventEmitter<Transaction>();
  @Input() private allCoins: Coin[];
  @Input() private myCoins: CoinInformation[];

  constructor(private userService: UserService) { 
    this.ToggleNewTrx(false);
    this.EnumToArray();
  }

  ngOnInit() {
    
  }
  
  onSymbolChanged($event){
    this.trxSymbol = $event;
    this.getAvailable();
  }
  
  onLocChanged($event){
    this.trxLocation = $event;
    this.getAvailable();
  }

  getAvailable(){
    let avail = 0;
    if(this.trxSymbol !== "" && this.trxLocation !== Location.None) {
      let coin = this.myCoins.find(m => m.symbol === this.trxSymbol);
      if(coin) {
        let wallet = coin.wallet.find(w => w.location === this.trxLocation);

        if (wallet){
          avail = wallet.quantity;
        }
      }
    }
    this.available = avail;
  }

  EnumToArray() {
      this.locs = Object.keys(Location)
                        .filter(key => !isNaN(Number(Location[key])));
      let idx = this.locs.indexOf("None");
      this.locs.splice(idx,1);
      idx = this.locs.indexOf("ICO");
      this.locs.splice(idx,1);
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
    this.xfer = false;
    this.trxSymbol = "";
    this.trxLocation = Location.None;
    this.available = 0;
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
    } else if (type === TrxType.XFEROUT) {
      this.xfer = true;
    }
  }
}
