import { CoinTicker } from "./coinTicker";

export class DisplayCoin {

    private _symbol: string;
    private _name: string;
    private _quantity: number;
    private _locations: number;
    private _ticker: CoinTicker;
    private _low: number;
    private _high: number;
    private _avg: number;

    constructor() {
        this._quantity = Number(0);
        this._locations = Number(0);
        this._low = Number(0.00000000);
        this._high = Number(0.00000000);
        this._avg = Number(0.00000000);
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

    get low(): number {
        return this._low;
    }

    set low(value: number) {
        this._low = value;
    }

    get high(): number {
        return this._high;
    }

    set high(value: number) {
        this._high = value;
    }

    get avg(): number {
        return this._avg;
    }

    set avg(value: number) {
        this._avg = value;
    }
}