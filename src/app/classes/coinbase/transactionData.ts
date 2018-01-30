import { MoneyHash } from "./moneyHash";
import { ResourceHash } from "./resourceHash";

/**
 * Represents a single Coinbase transaction.
 */
export class TransactionData {

    private _id: string;
    private _status: string;
    private _payment_method: ResourceHash;
    private _transaction: ResourceHash;
    private _amount: MoneyHash;
    private _total: MoneyHash;
    private _subtotal: MoneyHash;
    private _created_at: Date;
    private _updated_at: Date;
    private _resource: string;
    private _resource_path: string;
    private _committed: boolean;
    private _instant: boolean;
    private _fee: MoneyHash;
    private _payout_at: Date;

    constructor(json:any){

        this._id = json.id;
        this._status = json.status;
        this._payment_method = json.payment_method;
        this._transaction = json.transaction;
        this._amount = json.amount;
        this._total = json.total;
        this._subtotal = json.subtotal;
        this._created_at = json.created_at;
        this._updated_at = json.updated_at;
        this._resource = json.resource;
        this._resource_path = json.resource_path;
        this._committed = json.committed;
        this._instant = json.instant;
        this._fee = json.fee;
        this._payout_at = json.payout_at;

    }

    get id(): string {
        return this._id;
    }

    set id( value: string ) {
        this._id = value;
    }

    get status(): string {
        return this._status;
    }

    set status( value: string ) {
        this._status = value;
    }

    get payment_method(): ResourceHash {
        return this._payment_method;
    }

    set payment_method( value: ResourceHash ) {
        this._payment_method = value;
    }

    get transaction(): ResourceHash {
        return this._transaction;
    }

    set transaction( value: ResourceHash ) {
        this._transaction = value;
    }

    get amount(): MoneyHash {
        return this._amount;
    }

    set amount( value: MoneyHash ) {
        this._amount = value;
    }

    get total(): MoneyHash {
        return this._total;
    }

    set total( value: MoneyHash ) {
        this._total = value;
    }

    get subtotal(): MoneyHash {
        return this._subtotal;
    }

    set subtotal( value: MoneyHash ) {
        this._subtotal = value;
    }

    get created_at(): Date {
        return this._created_at;
    }

    set created_at( value: Date ) {
        this._created_at = value;
    }

    get updated_at(): Date {
        return this._updated_at;
    }

    set updated_at( value: Date ) {
        this._updated_at = value;
    }

    get resource(): string {
        return this._resource;
    }

    set resource( value: string ) {
        this._resource = value;
    }

    get resource_path(): string {
        return this._resource_path;
    }

    set resource_path( value: string ) {
        this._resource_path = value;
    }

    get committed(): boolean {
        return this._committed;
    }

    set committed( value: boolean ) {
        this._committed = value;
    }

    get instant(): boolean {
        return this._instant;
    }

    set instant( value: boolean ) {
        this._instant = value;
    }

    get fee(): MoneyHash {
        return this._fee;
    }

    set fee( value: MoneyHash ) {
        this._fee = value;
    }

    get payout_at(): Date {
        return this._payout_at;
    }

    set payout_at( value: Date ) {
        this._payout_at = value;
    }
}