import { Withdraw } from "./withdraw";

/**
 * Represents a withdraw response.
 */
export class WithdrawResponse {

    private _withdrawList: Withdraw[];
    private _success: boolean;

    constructor(json:any) {

        this._withdrawList = json.withdrawList;
        this._success = json.success;

    }

    get withdrawList(): Withdraw[] {
        return this._withdrawList;
    }

    set withdrawList(value: Withdraw[]) {
        this._withdrawList = value;
    }

    get success(): boolean {
        return this._success;
    }

    set success(value: boolean) {
        this._success = value;
    }
}