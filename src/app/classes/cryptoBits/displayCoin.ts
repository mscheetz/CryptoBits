import { CoinTicker } from "./coinTicker";

export class DisplayCoin {

    private _symbol: string;
    private _name: string;
    private _quantity: number;
    private _locations: number;
    private _ticker: CoinTicker;

    constructor() {
        this._quantity = 0;
        this._locations = 0;
        this._ticker = new CoinTicker();
    }

    get symbol(): string {
        return this._symbol;
    }

    set symbol(value: string) {
        this._symbol = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get quantity(): number {
        return this._quantity;
    }

    set quantity(value: number) {
        this._quantity = value;
    }

    get locations(): number {
        return this._locations;
    }

    set locations(value: number) {
        this._locations = value;
    }

    get ticker(): CoinTicker {
        return this._ticker;
    }

    set ticker(value: CoinTicker) {
        this._ticker = value;
    }
}