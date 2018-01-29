/**
 * Represents a single coin tick.
 */

export class TickData {

    private _coinType: string;
    private _trading: boolean;
    private _lastDealPrice: number;
    private _buy: number;
    private _sell: number;
    private _coinTypePair: string;
    private _sort: number;
    private _feeRate: number;
    private _volValue: number;
    private _high: number;
    private _datetime: number;
    private _vol: number;
    private _low: number;
    private _changeRate: number;

    constructor( json: any ) {

        this._coinType = json.coinType;
        this._trading = json.trading;
        this._lastDealPrice = json.lastDealPrice;
        this._buy = json.buy;
        this._sell = json.sell;
        this._coinTypePair = json.coinTypePair;
        this._sort = json.sort;
        this._feeRate = json.feeRate;
        this._volValue = json.volValue;
        this._high = json.high;
        this._datetime = json.datetime;
        this._vol = json.vol;
        this._low = json.low;
        this._changeRate = json.changeRate;

    }

    get coinType(): string {
        return this._coinType;
    }

    set coinType( value: string ) {
        this._coinType = value;
    }

    get trading(): boolean {
        return this._trading;
    }

    set trading( value: boolean ) {
        this._trading = value;
    }

    get lastDealPrice(): number {
        return this._lastDealPrice;
    }

    set lastDealPrice( value: number ) {
        this._lastDealPrice = value;
    }

    get buy(): number {
        return this._buy;
    }

    set buy( value: number ) {
        this._buy = value;
    }

    get sell(): number {
        return this._sell;
    }

    set sell( value: number ) {
        this._sell = value;
    }

    get coinTypePair(): string {
        return this._coinTypePair;
    }

    set coinTypePair( value: string ) {
        this._coinTypePair = value;
    }

    get sort(): number {
        return this._sort;
    }

    set sort( value: number ) {
        this._sort = value;
    }

    get feeRate(): number {
        return this._feeRate;
    }

    set feeRate( value: number ) {
        this._feeRate = value;
    }

    get volValue(): number {
        return this._volValue;
    }

    set volValue( value: number ) {
        this._volValue = value;
    }

    get high(): number {
        return this._high;
    }

    set high( value: number ) {
        this._high = value;
    }

    get datetime(): number {
        return this._datetime;
    }

    set datetime( value: number ) {
        this._datetime = value;
    }

    get vol(): number {
        return this._vol;
    }

    set vol( value: number ) {
        this._vol = value;
    }

    get low(): number {
        return this._low;
    }

    set low( value: number ) {
        this._low = value;
    }

    get changeRate(): number {
        return this._changeRate;
    }

    set changeRate( value: number ) {
        this._changeRate = value;
    }

}