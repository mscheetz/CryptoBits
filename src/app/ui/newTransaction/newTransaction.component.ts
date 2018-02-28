import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ApiInformation } from '../../classes/cryptoBits/apiInfo';
import { Location } from '../../classes/cryptoBits/location';
import { CoinInformation } from '../../classes/cryptoBits/coinInfo';
import { Transaction } from '../../classes/cryptoBits/transaction';
import { TrxType } from '../../classes/cryptoBits/trxType';
import { Coin } from '../../classes/99Crypto/coin';
import { UserService } from '../../services/userService';
import _ = require('lodash');
import { Address } from '../../classes/cryptoBits/address';

@Component({
  selector: 'app-newTransaction',
  templateUrl: './newTransaction.component.html',
  styleUrls: ['./newTransaction.component.css']
})

export class NewTransactionComponent implements OnInit {
  private coinInfo: CoinInformation;
  private transaction: Transaction;
  private location: Location;
  private locationList;
  private newTransaction: boolean = false;
  private trxType: TrxType = TrxType.NONE;
  private addressList: Address[];
  airdrop: boolean = false;
  ico: boolean = false;
  buy: boolean = false;
  sell: boolean = false;
  xfer: boolean = false;
  srcAddress: boolean = false
  destAddress: boolean = false
  trxSymbol: string = "";
  trxLocation: Location = Location.None;
  available: number = 0;
  //@Output() NewTrx = new EventEmitter<Transaction>();
  @Input() private allCoins: Coin[];
  @Input() private myCoins: CoinInformation[];

  constructor(private userService: UserService) { 
    this.toggleNewTrx(false);
    this.enumToArray();
    this.getAddresses();
  }

  ngOnInit() {
    
  }
  
  onSymbolChanged($event){
    this.trxSymbol = $event;
    this.getAvailable();
  }
  
  onSrcLocChanged($event){
    this.trxLocation = $event;
    this.getAvailable();
    this.srcAddress = false;
    if (this.trxLocation === Location.Address ) {
      this.srcAddress = true;
    }
  }

  onDestLocChanged() {
    this.destAddress = false;
    if (this.transaction.destinationLocation === Location.Address ) {
      this.destAddress = true;
    }
  }

  getAvailable(){
    let avail = 0;
    if(this.trxSymbol !== "" && this.trxLocation !== Location.None) {
      let coin = this.myCoins.find(m => m.symbol === this.trxSymbol);
      if(coin) {
        let wallet = coin.wallet.find(w => w.location === this.trxLocation);

        if (wallet){
          let qty: number = 0;
          wallet.coinBuy.forEach(function(coinBuy){
            let buyQty = Number(coinBuy.quantity);
            qty += buyQty;
          });
          avail = qty;
          //avail = wallet.quantity;
        }
      }
    }
    this.available = avail;
  }

  enumToArray() {
      this.locationList = Object.keys(Location)
                        .filter(key => !isNaN(Number(Location[key])));
      let idx = this.locationList.indexOf("None");
      this.locationList.splice(idx,1);
      idx = this.locationList.indexOf("ICO");
      this.locationList.splice(idx,1);
  }

  getAddresses() {
    this.addressList = [];
    if(this.myCoins) {
      for(var i = 0; i < this.myCoins.length; i ++) {
        for(var ii = 0; ii < this.myCoins[i].wallet.length; ii ++) {
          if(this.myCoins[i].wallet[ii].location === Location.Address) {
            this.addressList.push(this.myCoins[i].wallet[ii].address);
          }
        }
      }
    }
  }

  addedAddress(data) {
    if (data.locationType === "source") {
      this.transaction.sourceAddress = data.address;
    } else if (data.locationType === "destination") {
      this.transaction.destinationAddress = data.address;
    }
  }

  addTransaction(){
      this.transaction.fee = Number(this.transaction.fee);
      this.transaction.price = Number(this.transaction.price);
      this.transaction.quantity = Number(this.transaction.quantity);
      this.transaction.trxType = this.trxType;
      if (this.transaction.sourceLocation !== Location.Address ) {
        this.transaction.sourceAddress.name = this.transaction.sourceLocation + " " + this.transaction.symbol;
      }
      this.userService.newTransaction(this.transaction);
      this.toggleNewTrx(false);
  }

  resetTrx() {
    this.coinInfo = new CoinInformation();
    this.transaction = new Transaction();
    this.trxType = TrxType.NONE;
    this.resetTrxType();
  }

  resetTrxType() {
    this.ico = false;
    this.buy = false;
    this.sell = false;
    this.airdrop = false;
    this.xfer = false;
    this.trxSymbol = "";
    this.trxLocation = Location.None;
    this.available = 0;
  }

  toggleNewTrx(state: boolean) {
    this.resetTrx();
    this.newTransaction = state;
  }

  setTrxType(type: TrxType) {
    this.trxType = type;
    this.resetTrxType();
    if(type === TrxType.ICO){
      this.ico = true;
    } else if (type === TrxType.AIRDROP) {
      this.airdrop = true;
    } else if (type === TrxType.BUY) {
      this.buy = true;
    } else if (type === TrxType.SELL) {
      this.sell = true;
    } else if (type === TrxType.WITHDRAWAL) {
      this.xfer = true;
    }
  }
}
