import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ApiInformation } from '../../classes/cryptoBits/apiInfo';
import { Location } from '../../classes/cryptoBits/location';
import { CoinInformation } from '../../classes/cryptoBits/coinInfo';
import { Transaction } from '../../classes/cryptoBits/transaction';
import { TrxType } from '../../classes/cryptoBits/trxType';
import { Coin } from '../../classes/99Crypto/coin';

@Component({
  selector: 'app-newTransaction',
  templateUrl: './newTransaction.component.html',
  styleUrls: ['./newTransaction.component.css']
})

export class NewTransactionComponent {
  private coinInfo: CoinInformation;
  private transaction: Transaction;
  private location: Location;
  private locs;
  private newTransaction: boolean = false;
  private trxType: TrxType;
  private ico: boolean = false;
  @Output() AddedApi = new EventEmitter<ApiInformation>();
  @Input() private allCoins: Coin[];

  constructor() { 
    this.ToggleNewTrx(false);
    this.EnumToArray();
  }
  
  public EnumToArray() {
      this.locs = Object.keys(Location)
                        .filter(key => !isNaN(Number(Location[key])));
  }

  public AddTransaction(){
      //this.AddedApi.emit(this.apiInfo);
      //console.log(this.apiInfo);
      this.ToggleNewTrx(false);
  }

  public ResetTrx() {
    this.coinInfo = new CoinInformation();
    this.transaction = new Transaction();
    this.trxType = TrxType.NONE;
    this.ico = false;
  }

  public ToggleNewTrx(state: boolean) {
    this.ResetTrx();
    this.newTransaction = state;
  }

  public SetTrxType(type: TrxType) {
    this.trxType = type;
    if(type === TrxType.ICO){
      this.ico = true;
    }
  }
}
