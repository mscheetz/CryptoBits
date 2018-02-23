import { TrxType } from "./trxType";

/**
 * Represents a transaction.
 */
export class Transaction {

    private _symbol: string;
    private _name: string;
    private _pair: string;
    private _type: string;
    private _date: Date;
    private _quantity: number;
    private _price: number;
    private _source: string;
    private _destination: string;
    private _trx_id: string;
    private _trx_source: string;
    private _trxType: TrxType;

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

    get pair(): string {
        return this._pair;
    }

    set pair(value: string) {
        this._pair = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get date(): Date {
        return this._date;
    }

    set date(value: Date) {
        this._date = value;
    }

    get quantity(): number {
        return this._quantity;
    }

    set quantity(value: number) {
        this._quantity = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get source(): string {
        return this._source;
    }

    set source(value: string) {
        this._source = value;
    }

    get destination(): string {
        return this._destination;
    }

    set destination(value: string) {
        this._destination = value;
    }

    get trx_id(): string {
        return this._trx_id;
    }

    set trx_id(value: string) {
        this._trx_id = value;
    }

    get trx_source(): string {
        return this._trx_source;
    }

    set trx_source(value: string) {
        this._trx_source = value;
    }

    get trxType(): TrxType {
        return this._trxType;
    }

    set trxType(value: TrxType) {
        this._trxType = value;
    }
}