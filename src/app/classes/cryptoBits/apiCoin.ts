import { Location } from "./location";

/**
 * Represents a coin from an api call
 */
export class ApiCoin {
    private _symbol: string;
    private _quantity: number;
    private _frozen: number;
    private _location: Location;

    get symbol(): string {
        return this._symbol;
    }

    set symbol(value: string) {
        this._symbol = value;
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