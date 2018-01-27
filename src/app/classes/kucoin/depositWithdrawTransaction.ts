/**
 * Represents a deposit/withdraw transaction.
 */
export class DepositWithdrawTransaction {
    
    private _fee: number;
    private _oid: string;
    private _type: string;
    private _amount: number;
    private _remark: string;
    private _status: string;
    private _address: string;
    private _context: string;
    private _userOid: string;
    private _coinType: string;
    private _createdAt: number;
    private _deletedAt: number;
    private _updatedAt: number;
    private _outerWalletTxid: number;

    constructor( json: any ) {

        this._fee = json.fee;
        this._oid = json.oid;
        this._type = json.type;
        this._amount = json.amount;
        this._remark = json.remark;
        this._status = json.status;
        this._address = json.address;
        this._context = json.context;
        this._userOid = json.userOid;
        this._coinType = json.coinType;
        this._createdAt = json.createdAt;
        this._deletedAt = json.deletedAt;
        this._updatedAt = json.updatedAt;
        this._outerWalletTxid = json.outerWalletTxid;

    }

    get fee(): number {
        return this._fee;
    }

    set fee( value: number ) {
        this._fee = value;
    }

    get oid(): string {
        return this._oid;
    }

    set oid( value: string ) {
        this._oid = value;
    }

    get type(): string {
        return this._type;
    }

    set type( value: string ) {
        this._type = value;
    }

    get amount(): number {
        return this._amount;
    }

    set amount( value: number ) {
        this._amount = value;
    }

    get remark(): string {
        return this._remark;
    }

    set remark( value: string ) {
        this._remark = value;
    }

    get status(): string {
        return this._status;
    }

    set status( value: string ) {
        this._status = value;
    }

    get address(): string {
        return this._address;
    }

    set address( value: string ) {
        this._address = value;
    }

    get context(): string {
        return this._context;
    }

    set context( value: string ) {
        this._context = value;
    }

    get userOid(): string {
        return this._userOid;
    }

    set userOid( value: string ) {
        this._userOid = value;
    }

    get coinType(): string {
        return this._coinType;
    }

    set coinType( value: string ) {
        this._coinType = value;
    }

    get createdAt(): number {
        return this._createdAt;
    }

    set createdAt( value: number ) {
        this._createdAt = value;
    }

    get deletedAt(): number {
        return this._deletedAt;
    }

    set deletedAt( value: number ) {
        this._deletedAt = value;
    }

    get updatedAt(): number {
        return this._updatedAt;
    }

    set updatedAt( value: number ) {
        this._updatedAt = value;
    }

    get outerWalletTxid(): number {
        return this._outerWalletTxid;
    }

    set outerWalletTxid( value: number ) {
        this._outerWalletTxid = value;
    }
}