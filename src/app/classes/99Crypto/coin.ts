/**
 * Represents a single coin from 99CryptoCoins
 */
export class Coin {
    
    private _id: string;
    private _name: string;
    private _symbol: string;

    constructor (json: any) {
        this._id = json.id;
        this._name = json.name;
        this._symbol = json.symbol;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }
    
    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
    
    get symbol(): string {
        return this._symbol;
    }

    set symbol(value: string) {
        this._symbol = value;
    }
}