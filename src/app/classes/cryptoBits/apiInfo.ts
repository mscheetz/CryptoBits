import { Location } from "./location";

/**
 * Represents exchange api information.
 */
export class ApiInformation {

    private _source: Location;
    private _apiKey: string;
    private _apiSecret: string;

    get source(): Location {
        return this._source;
    }
    
    set source( value: Location ) {
        this._source = value;
    }
    
    get apiKey(): string {
        return this._apiKey;
    }
    
    set apiKey( value: string ) {
        this._apiKey = value;
    }
    
    get apiSecret(): string {
        return this._apiSecret;
    }
    
    set apiSecret( value: string ) {
        this._apiSecret = value;
    }
}