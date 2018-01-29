import { Wallet } from "./wallet";
import { Pagination } from "./pagination";

/**
 * Represents a single Coinbase wallet response.
 */
export class WalletResponse {

    private _pagination: Pagination;
    private _data: Wallet;

    constructor( json: any ) {

        this._pagination = json.pagination;
        this._data = json.data;

    }

    get pagination(): Pagination {
        return this._pagination;
    }

    set pagination( value: Pagination ) {
        this._pagination = value;
    }

    get data(): Wallet {
        return this._data;
    }

    set data( value: Wallet ) {
        this._data = value;
    }
}