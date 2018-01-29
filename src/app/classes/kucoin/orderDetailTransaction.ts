/**
 * Represents a single order detail transaction.
 */
export class OrderDetailTransaction {
    
    private _oid: string;
    private _dealPrice: number;
    private _orderOid: string;
    private _direction: string;
    private _amount: number;
    private _dealValue: number;
    private _createdAt: number;

    constructor( json: any ) {

        this._oid = json.oid;
        this._dealPrice = json.dealPrice;
        this._orderOid = json.orderOid;
        this._direction = json.direction;
        this._amount = json.amount;
        this._dealValue = json.dealValue;
        this._createdAt = json.createdAt;
    }

    get oid(): string {
        return this._oid;
    }

    set oid( value: string ) {
        this._oid = value;
    }

    get dealPrice(): number {
        return this._dealPrice;
    }

    set dealPrice( value: number ) {
        this._dealPrice = value;
    }

    get orderOid(): string {
        return this._orderOid;
    }

    set orderOid( value: string ) {
        this._orderOid = value;
    }

    get direction(): string {
        return this._direction;
    }

    set direction( value: string ) {
        this._direction = value;
    }

    get_amountfee(): number {
        return this._amount;
    }

    set amount( value: number ) {
        this._amount = value;
    }

    get dealValue(): number {
        return this._dealValue;
    }

    set dealValue( value: number ) {
        this._dealValue = value;
    }

    get createdAt(): number {
        return this._createdAt;
    }

    set createdAt( value: number ) {
        this._createdAt = value;
    }
}