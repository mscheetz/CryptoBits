import { Deposit } from "./deposit";

/**
 * Represents a deposit response.
 */
export class DepositResponse {

    private _depositList: Deposit[];
    private _success: boolean;

    constructor(json:any) {

        this._depositList = json.depositList;
        this._success = json.success;

    }

    get depositList(): Deposit[] {
        return this._depositList;
    }

    set depositList(value: Deposit[]) {
        this._depositList = value;
    }

    get success(): boolean {
        return this._success;
    }

    set success(value: boolean) {
        this._success = value;
    }
}