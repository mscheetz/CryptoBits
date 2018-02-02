import { ApiInformation } from "./apiInfo";
import { CoinInformation } from "./coinInfo";
import { Transaction } from "./transaction";

/**
 * Represents a CryptoBits user.
 */
export class User {

    private _id: string;
    private _email: string;
    private _first: string;
    private _last: string;
    private _apiInfo: ApiInformation[];
    private _coinInfo: CoinInformation[];
    private _transactions: Transaction[];

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get first(): string {
        return this._first;
    }

    set first(value: string) {
        this._first = value;
    }

    get last(): string {
        return this._last;
    }

    set last(value: string) {
        this._last = value;
    }

    get apiInfo(): ApiInformation[] {
        return this._apiInfo;
    }

    set apiInfo(value: ApiInformation[]) {
        this._apiInfo = value;
    }

    get coinInfo(): CoinInformation[] {
        return this._coinInfo;
    }

    set coinInfo(value: CoinInformation[]) {
        this._coinInfo = value;
    }

    get transaction(): Transaction[] {
        return this._transactions;
    }

    set transaction(value: Transaction[]) {
        this._transactions = value;
    }
    
}