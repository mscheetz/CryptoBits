import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Address } from '../../classes/cryptoBits/address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})

export class AddressComponent {
  private address: Address;
  private addAddress: boolean = false;
  @Input() private addressList: Address[];
  @Input() private locationType: string;
  @Output() addedAddress = new EventEmitter<any>();

  constructor() { 
    this.address = new Address();
  }

  addNewAddress(){
      this.addedAddress.emit({address: this.address, locationType: this.locationType});
      this.address = new Address();
      console.log(this.address);
      this.toggleAddressAdder(false);
  }

  toggleAddressAdder(show: boolean) {
    this.address = new Address();
    this.addAddress = show;
  }
}
