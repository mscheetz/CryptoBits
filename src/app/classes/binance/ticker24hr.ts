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
    private _openTime: number;
    private _closedTime: number;
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

}