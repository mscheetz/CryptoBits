/**
 * Represents a single coin balance.
 */
export class CoinBalance {
    
    private _coinType: string;
    private _balance: number;
    private _freeze: number;

    constructor( json: any ) {

        this._coinType = json.coinType;
        this._balance = json.balance;
        this._freeze = json.freeze;

    }

    get coinType(): string {
        return this._coinType;
    }

    set coinType( value: string ) {
        this._coinType = value;
    }

    get balance(): number {
        return this._balance;
    }

    set balance( value: number ) {
        this._balance = value;
    }

    get freeze(): number {
        return this._freeze;
    }

    set freeze( value: number ) {
        this._freeze = value;
    }
}
