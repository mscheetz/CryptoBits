import { Location } from "./location";
import { CoinBuy } from "./coinBuy";
import { Address } from "./address";

export class Wallet {
    private _location: Location;
    private _coinBuy: CoinBuy[];
    private _address: Address;

    constructor() {
        this._location = Location.None;
        this._coinBuy = [];
        this._address = new Address();
    }

    get location(): Location {
        return this._location;
    }

    set location(value: Location) {
        this._location = value;
    }

    get address(): Address {
        return this._address;
    }

    set address(value: Address) {
        this._address = value;
    }

    get coinBuy(): CoinBuy[] {
        return this._coinBuy;
    }

    set coinBuy(value: CoinBuy[]) {
        this._coinBuy = value;
    }


}