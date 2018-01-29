
/**
 * Represents an api response header
 */
export class ApiResponseHeader {

    private _success: boolean;
    private _code: string;
    private _msg: string;  

    constructor( json: any ) {

        this._success = json.success;
        this._code = json.code;
        this._msg = json.msg;

    }

    get success(): boolean {
        return this._success;
    }

    set success( value: boolean ) {
        this._success = value;
    }

    get code(): string {
        return this._code;
    }

    set code( value: string ) {
        this._code = value;
    }

    get msg(): string {
        return this._msg;
    }

    set msg( value: string ) {
        this._msg = value;
    }



}