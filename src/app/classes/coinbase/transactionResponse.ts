import { Pagination } from "./pagination";
import { TransactionData } from "./transactionData";

/**
 * Represents a single transaction response.
 */
export class TransactionResponse {

    private _pagination: Pagination;
    private _data: TransactionData[];

    constructor(json:any) {

        this._pagination = json.pagination;
        this._data = json.data;

    }

    get pagination(): Pagination {
        return this._pagination;
    }

    set pagination( value: Pagination ) {
        this._pagination = value;
    }

    get data(): TransactionData[] {
        return this._data;
    }

    set data( value: TransactionData[] ) {
        this._data = value;
    }
}