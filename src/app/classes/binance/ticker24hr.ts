/**
 * Represents a single 24hr ticker.
 */
export class Ticker24hr {

    private _symbol: string;
    private _priceChange: number;
    private _priceChangePercent: number;
    private _weightedAvgPrice: number;
    private _prevClosePrice: number;
    private _lastPrice: number;
    private _lastQty: number;
    private _bidPrice: number;
    private _askPrice: number;
    private _openPrice: number;
    private _highPrice: number;
    private _lowPrice: number;
    private _volume: number;
    private _quoteVolume: number;
    private _openTime: Date;
    private _closedTime: Date;
    private _firstId: number;
    private _lastId: number;
    private _count: number;

    constructor( json: any ) {
        this._symbol = json.symbol;
        this._priceChange = json.priceChange;
        this._priceChangePercent = json.priceChangePercent;
        this._weightedAvgPrice = json._weightedAvgPrice;
        this._prevClosePrice = json._prevClosePrice;
        this._lastPrice = json._lastPrice;
        this._lastQty = json._lastQty;
        this._bidPrice = json.bidPrice;
        this._askPrice = json.askPrice;
        this._openPrice = json.openPrice;
        this._highPrice = json.highPrice;
        this._lowPrice = json.lowPrice;
        this._volume = json.volume;
        this._quoteVolume = json.quoteVolue;
        this._openTime = json.openTime;
        this._closedTime = json.closedTime;
        this._firstId = json.firstId;
        this._lastId = json.lastId;
        this._count = json.count;
    }

    get symbol(): string {
        return this._symbol;
    }

    set symbol( value: string ) {
        this._symbol = value;
    }

    get priceChange(): number {
        return this._priceChange;
    }

    set priceChange( value: number ) {
        this._priceChange = value;
    }

    get priceChangePercent(): number {
        return this._priceChangePercent;
    }

    set priceChangePercent( value: number ) {
        this._priceChangePercent = value;
    }

    get weightedAvgPrice(): number {
        return this._weightedAvgPrice;
    }

    set weightedAvgPrice( value: number ) {
        this._weightedAvgPrice = value;
    }

    get prevClosePrice(): number {
        return this._prevClosePrice;
    }

    set prevClosePrice( value: number ) {
        this._prevClosePrice = value;
    }

    get lastPrice(): number {
        return this._lastPrice;
    }

    set lastPrice( value: number ) {
        this._lastPrice = value;
    }

    get lastQty(): number {
        return this._lastQty;
    }

    set lastQty( value: number ) {
        this._lastQty = value;
    }

    get bidPrice(): number {
        return this._bidPrice;
    }

    set bidPrice( value: number ) {
        this._bidPrice = value;
    }

    get askPrice(): number {
        return this._askPrice;
    }

    set askPrice( value: number ) {
        this._askPrice = value;
    }

    get openPrice(): number {
        return this._openPrice;
    }

    set openPrice( value: number ) {
        this._openPrice = value;
    }

    get highPrice(): number {
        return this._highPrice;
    }

    set highPrice( value: number ) {
        this._highPrice = value;
    }

    get lowPrice(): number {
        return this._lowPrice;
    }

    set lowPrice( value: number ) {
        this._lowPrice = value;
    }

    get volume(): number {
        return this._volume;
    }

    set volume( value: number ) {
        this._volume = value;
    }

    get quoteVolume(): number {
        return this._quoteVolume;
    }

    set quoteVolume( value: number ) {
        this._quoteVolume = value;
    }

    get openTime(): Date {
        return this._openTime;
    }

    set openTime( value: Date ) {
        this._openTime = value;
    }

    get closedTime(): Date {
        return this._closedTime;
    }

    set closedTime( value: Date ) {
        this._closedTime = value;
    }

    get firstId(): number {
        return this._firstId;
    }

    set firstId( value: number ) {
        this._firstId = value;
    }

    get lastId(): number {
        return this._lastId;
    }

    set lastId( value: number ) {
        this._lastId = value;
    }

    get count(): number {
        return this._count;
    }

    set count( value: number ) {
        this._count = value;
    }

}