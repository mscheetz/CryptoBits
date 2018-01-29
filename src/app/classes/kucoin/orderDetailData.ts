import { OrderDetailTransaction } from "./orderDetailTransaction";

/**
 * Represents order detail data.
 */
export class OrderDetailData {
    
    private _datas: OrderDetailTransaction;
    private _total: number;
    private _limit: number;
    private _pageNos: number;
    private _currPageNo: number;
    private _navigatePageNos: [number];
    private _userOid: string;
    private _direction: string;
    private _startRow: number;
    private _firstPage: boolean;
    private _lastPage: boolean;

    constructor( json: any ) {

        this._datas = json.datas;
        this._total = json.total;
        this._limit = json.limit;
        this._pageNos = json.pageNos;
        this._currPageNo = json.currPageNo;
        this._navigatePageNos = json.navigatePageNos;
        this._userOid = json.userOid;
        this._direction = json.direction;
        this._startRow = json.startRow
        this._firstPage = json.firstPage;
        this._lastPage = json.lastPage;

    }

    get datas(): OrderDetailTransaction {
        return this._datas;
    }

    set datas( value: OrderDetailTransaction ) {
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

    get userOid(): string {
        return this._userOid;
    }

    set userOid( value: string ) {
        this._userOid = value;
    }

    get direction(): string {
        return this._direction;
    }

    set direction( value: string ) {
        this._direction = value;
    }

    get startRow(): number {
        return this._startRow;
    }

    set startRow( value: number ) {
        this._startRow = value;
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
}