import { Location } from "./location";
import { CoinBuy } from "./coinBuy";

export class Wallet {
    private _location: Location;
    private _name: string;
    private _address: string;
    private _coinBuy: CoinBuy[];

    constructor() {
        this._location = Location.None;
        this._name = "";
        this._address = "";
        this._coinBuy = [];
    }

    get location(): Location {
        return this._location;
    }

    set location(value: Location) {
        this._location = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get coinBuy(): CoinBuy[] {
        return this._coinBuy;
    }

    set coinBuy(value: CoinBuy[]) {
        this._coinBuy = value;
    }
}