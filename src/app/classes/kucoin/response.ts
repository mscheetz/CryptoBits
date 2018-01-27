/**
 * Represents a single http response.
 */
export class Response {
    
    private _success: boolean;
    private _code: number;

    constructor( json: any ) {

        this._success = json.success;
        this._code = json.code;

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
}