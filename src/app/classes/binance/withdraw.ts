/**
 * Represents a Binance withdraw.
 */
export class Withdraw {

    private _id: number;
    private _amount: number;
    private _asset: string;
    private _address: string;
    private _txId: string;
    private _applyTime: number;
    private _status: number;

    constructor (json:any) {

        this._id = json.id;
        this._amount = json.amount;
        this._asset = json.asset;
        this._address = json.address;
        this._txId = json.txId;
        this._applyTime = json.applyTime;
        this._status = json.status;

    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get amount(): number {
        return this._amount;
    }

    set amount(value: number) {
        this._amount = value;
    }

    get asset(): string {
        return this._asset;
    }

    set asset(value: string) {
        this._asset = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get txId(): string {
        return this._txId;
    }

    set txId(value: string) {
        this._txId = value;
    }

    get applyTime(): number {
        return this._applyTime;
    }

    set applyTime(value: number) {
        this._applyTime = value;
    }

    get status(): number {
        return this._status;
    }

    set status(value: number) {
        this._status = value;
    }
}