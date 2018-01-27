import { DepositWithdrawTransaction } from "./depositWithdrawTransaction";

/**
 * Represents deposit/withdraw information.
 */
export class DepositWithdrawInfo {
    
    private _datas: DepositWithdrawTransaction;
    private _total: number;
    private _limit: number;
    private _pageNos: number;
    private _currPageNo: number;
    private _navigatePageNos: [number];
    private _coinType: string;
    private _type: string;
    private _userOid: string;
    private _status: string;
    private _firstPage: boolean;
    private _lastPage: boolean;
    private _startRow: number;

    constructor( json: any ) {

        this._datas = json.datas;
        this._total = json.total;
        this._limit = json.limit;
        this._pageNos = json.pageNos;
        this._currPageNo = json.currPageNo;
        this._navigatePageNos = json.navigatePageNos;
        this._coinType = json.coinType;
        this._type = json.type;
        this._userOid = json.userOid;
        this._status = json.status;
        this._firstPage = json.firstPage;
        this._lastPage = json.lastPage;
        this._startRow = json.startRow

    }

    get datas(): DepositWithdrawTransaction {
        return this._datas;
    }

    set datas( value: DepositWithdrawTransaction ) {
        this._datas = value;
    }

    get total(): number {
        return this._total;
    }

    set total( value: number ) {
        this._total = value;
    }

    get limit(): number {
        return this._limit;
    }

    set limit( value: number ) {
        this._limit = value;
    }

    get pageNos(): number {
        return this._pageNos;
    }

    set pageNos( value: number ) {
        this._pageNos = value;
    }

    get currPageNo(): number {
        return this._currPageNo;
    }

    set currPageNo( value: number ) {
        this._currPageNo = value;
    }

    get navigatePageNos(): [number] {
        return this._navigatePageNos;
    }

    set navigatePageNos( value: [number] ) {
        this._navigatePageNos = value;
    }

    get coinType(): string {
        return this._coinType;
    }

    set coinType( value: string ) {
        this._coinType = value;
    }

    get type(): string {
        return this._type;
    }

    set type( value: string ) {
        this._type = value;
    }

    get userOid(): string {
        return this._userOid;
    }

    set userOid( value: string ) {
        this._userOid = value;
    }

    get status(): string {
        return this._status;
    }

    set status( value: string ) {
        this._status = value;
    }

    get firstPage(): boolean {
        return this._firstPage;
    }

    set firstPage( value: boolean ) {
        this._firstPage = value;
    }

    get lastPage(): boolean {
        return this._lastPage;
    }

    set lastPage( value: boolean ) {
        this._lastPage = value;
    }

    get startRow(): number {
        return this._startRow;
    }

    set startRow( value: number ) {
        this._startRow = value;
    }
}