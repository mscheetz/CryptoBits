import { CalendarItem } from "../classes/coindar/calendarItem";
import { isNullOrUndefined } from "util";
import { RestApi } from "./restApi";


export class CoindarApi {
    private apiBase = 'https://coindar.org';
    private restApi;
  
    constructor() {
      this.restApi = new RestApi();
  
      console.log('Binance APIs');
    }

    /**
     * Get calendar events for a given coin
     * 
     * @param coinName        Name of coin to query
     */
    public async GetCalendarItem(coinName: string): Promise<CalendarItem[]> {

        let url = this.apiBase + "/api/v1/coinEvents";
        return await this.coindarRequest(
          'GET',
          url,
          true,
          ["name", coinName]
        )    
    }

    /**
     * Request a Coindar api
     * 
     * @param httpMethod      Http Method type
     * @param url             Url to access
     * @param parameters      Optional query parameters
     */
    private async coindarRequest(
      httpMethod: string,
      url: string,
      secured: boolean,
      ...parameters: [ string, any ][]): Promise<any>{
        
        let uri: URL = new URL(
          url,
          this.apiBase
        );
  
        for(let parameter of parameters){
          if(isNullOrUndefined(parameter[1])){
            continue;
          }
          uri.searchParams.append(parameter[0], parameter[1].toString());
        }
    
        return await this.restApi.apiRequest(
          httpMethod,
          uri.href
        );  
    }
}