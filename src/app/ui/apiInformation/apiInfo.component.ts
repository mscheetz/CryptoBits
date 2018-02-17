import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ApiInformation } from '../../classes/cryptoBits/apiInfo';
import { Location } from '../../classes/cryptoBits/location';

@Component({
  selector: 'app-apiInfo',
  templateUrl: './apiInfo.component.html',
  styleUrls: ['./apiInfo.component.css']
})

export class ApiInfoComponent {
  private apiInfo: ApiInformation;
  private location: Location;
  private locs;
  private addApi: boolean = false;
  @Output() addedApi = new EventEmitter<ApiInformation>();

  constructor() { 
    this.apiInfo = new ApiInformation();
    this.enumToArray();
  }
  
  enumToArray() {
      this.locs = Object.keys(Location)
                        .filter(key => !isNaN(Number(Location[key])));
  }

  addNewApi(){
      this.addedApi.emit(this.apiInfo);
      console.log(this.apiInfo);
      this.hideApiAdder();
  }

  showApiAdder(){
    this.apiInfo = new ApiInformation();
    this.addApi = true;
  }

  hideApiAdder() {
      this.addApi = false;
  }
}
