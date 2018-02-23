import { TrxType } from "./trxType";
import { Location } from "./location";

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
    private _fee: number;
    private _feeSymbol: string;
    private _source: string;
    private _destination: string;
    private _trxType: TrxType;
    private _sourceLocation: Location;
    private _destinationLocation: Location;
    private _trxId: string;
    private _trxSource: string;

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

    get trxId(): string {
        return this._trxId;
    }

    set trxId(value: string) {
        this._trxId = value;
    }

    get trxSource(): string {
        return this._trxSource;
    }

    set trxSource(value: string) {
        this._trxSource = value;
    }

    get trxType(): TrxType {
        return this._trxType;
    }

    set trxType(value: TrxType) {
        this._trxType = value;
    }

    get sourceLocation(): Location {
        return this._sourceLocation;
    }

    set sourceLocation(value: Location) {
        this._sourceLocation = value;
    }

    get destinationLocation(): Location {
        return this._destinationLocation;
    }

    set destinationLocation(value: Location) {
        this._destinationLocation = value;
    }
}