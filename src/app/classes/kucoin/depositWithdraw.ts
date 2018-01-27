import { DepositWithdrawInfo } from "./depositWithdrawInfo";

/**
 * Represents a deposit/withdraw response.
 */
export class DepositWithdraw {
    
    private _success: boolean;
    private _code: number;
    private _data: DepositWithdrawInfo

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

    get data(): DepositWithdrawInfo {
        return this._data;
    }

    set data( value: DepositWithdrawInfo ) {
        this._data = value;
    }
}