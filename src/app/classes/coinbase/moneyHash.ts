/**
 * Represents a single Coinbase money hash.
 */
export class MoneyHash {

    private _amount: string;
    private _currency: string;
    
    constructor( json: any ) {

        this._amount = json.amount;
        this._currency = json.currency;

    }

    get amount(): string {
        return this._amount;
    }

    set amount( value: string ) {
        this._amount = value;
    }

    get currency(): string {
        return this._currency;
    }

    set currency( value: string ) {
        this._currency = value;
    }
}