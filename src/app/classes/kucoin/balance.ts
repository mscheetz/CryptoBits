import { CoinBalance } from "./coinBalance";

/**
 * Represents an account balance.
 */
export class Balance {
    
    private _success: boolean;
    private _code: number;
    private _data: CoinBalance

    constructor( json: any ) {

        this._success = json.success;
        this._code = json.code;
        this._data = json.data;

    }

    get success(): boolean {
        return this._success;
    }

    set success( value: boolean ) {
        this._success = value;
    }

    get code(): number {
        return this._code;
    }

    set code( value: number ) {
        this._code = value;
    }

    get data(): CoinBalance {
        return this._data;
    }

    set data( value: CoinBalance ) {
        this._data = value;
    }
}