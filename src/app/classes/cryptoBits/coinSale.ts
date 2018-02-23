import { Location } from "./location";
import { TrxType } from "./trxType";

/**
 * Represents a coin sale
 */
export class CoinSale {
    private _quantity: number;
    private _pair: string;
    private _price: number;
    private _date: Date;
    private _fee: number;
    private _feeSymbol: string;
    private _trxType: TrxType;

    constructor() {
        this._quantity = 0;
        this._pair = "";
        this._price = 0.0;
        this._date = null;
        this._fee = 0;
        this._feeSymbol = "";
        this._trxType = TrxType.NONE;
    }

    get quantity(): number {
        return this._quantity;
    }

    set quantity(value: number) {
        this._quantity = value;
    }

    get pair(): string {
        return this._pair;
    }

    set pair(value: string) {
        this._pair = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get date(): Date {
        return this._date;
    }

    set date(value: Date) {
        this._date = value;
    }

    get fee(): number {
        return this._fee;
    }

    set fee(value: number) {
        this._fee = value;
    }

    get feeSymbol(): string {
        return this._feeSymbol;
    }

    set feeSymbol(value: string) {
        this._feeSymbol = value;
    }

    get trxType(): TrxType {
        return this._trxType;
    }

    set trxType(value: TrxType) {
        this._trxType = value;
    }
}