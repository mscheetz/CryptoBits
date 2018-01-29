import { TickData } from "./tickData";

/**
 * Represents a tick response.
 */
export class Tick {
    
    private _success: boolean;
    private _code: number;
    private _msg: string;
    private _data: TickData

    constructor( json: any ) {

        this._success = json.success;
        this._code = json.code;
        this._msg = json.msg;
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

    get msg(): string {
        return this._msg;
    }

    set msg( value: string ) {
        this._msg = value;
    }

    get data(): TickData {
        return this._data;
    }

    set data( value: TickData ) {
        this._data = value;
    }
}