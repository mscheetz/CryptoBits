import { Location } from "./location";
/**
 * Represents a coin wallet
 */
export class CoinWallet {

    private _quantity: number;
    private _frozen: number;
    private _location: Location;

    constructor () {
        this._quantity = 0;
        this._frozen = 0;
        this._location = Location.Address;
    }

    get quantity(): number {
        return this._quantity;
    }

    set quantity(value: number) {
        this._quantity = value;
    }

    get frozen(): number {
        return this._frozen;
    }

    set frozen(value: number) {
        this._frozen = value;
    }

    get location(): Location {
        return this._location;
    }

    set location(value: Location) {
        this._location = value;
    }
}