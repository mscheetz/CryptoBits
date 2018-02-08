import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ApiInformation } from '../../classes/cryptoBits/apiInfo';
import { Location } from '../../classes/cryptoBits/location';

@Component({
  selector: 'app-apiInfo',
  templateUrl: './apiInfo.component.html',
  styleUrls: ['./apiInfo.component.css']
})
export class ApiInfoComponent implements OnInit {
  apiInfo: ApiInformation;
  location: Location;
    locs: string[];

  constructor() { 
      this.apiInfo = new ApiInformation();
  }
  
  public EnumToArray() {
      this.locs = [];
      for(var item in Location) {
          if(Location.hasOwnProperty(item)) {
              this.locs.push(item);
          }
      }
  }

  ngOnInit() {
  }
}
