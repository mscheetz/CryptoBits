export class CoinTicker {

    private _rank: number;
    private _price_usd: number;
    private _price_btc: number;
    private _24h_volume_usd: number;
    private _market_cap_usd: number;
    private _available_supply: number;
    private _total_supply: number;
    private _max_supply: number;
    private _percent_change_1h: number;
    private _percent_change_24h: number;
    private _percent_change_7d: number;
    private _last_updated: number;

    get rank(): number {
        return this._rank;
    }

    set rank(value: number) {
        this._rank = value;
    }

    get price_usd(): number {
        return this._price_usd;
    }

    set price_usd(value: number) {
        this._price_usd = value;
    }

    get price_btc(): number {
        return this._price_btc;
    }

    set price_btc(value: number) {
        this._price_btc = value;
    }

    get coin_24h_volume_usd(): number {
        return this._24h_volume_usd;
    }

    set coin_24h_volume_usd(value: number) {
        this._24h_volume_usd = value;
    }

    get market_cap_usd(): number {
        return this._market_cap_usd;
    }

    set market_cap_usd(value: number) {
        this._market_cap_usd = value;
    }

    get available_supply(): number {
        return this._available_supply;
    }

    set available_supply(value: number) {
        this._available_supply = value;
    }

    get total_supply(): number {
        return this._total_supply;
    }

    set total_supply(value: number) {
        this._total_supply = value;
    }

    get max_supply(): number {
        return this._max_supply;
    }

    set max_supply(value: number) {
        this._max_supply = value;
    }

    get percent_change_1h(): number {
        return this._percent_change_1h;
    }

    set percent_change_1h(value: number) {
        this._percent_change_1h = value;
    }

    get percent_change_24h(): number {
        return this._percent_change_24h;
    }

    set percent_change_24h(value: number) {
        this._percent_change_24h = value;
    }

    get percent_change_7d(): number {
        return this._percent_change_7d;
    }

    set percent_change_7d(value: number) {
        this._percent_change_7d = value;
    }

    get last_updated(): number {
        return this._last_updated;
    }

    set last_updated(value: number) {
        this._last_updated = value;
    }
}