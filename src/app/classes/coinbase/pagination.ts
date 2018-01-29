/**
 * Represents a Coinbase pagination response.
 */
export class Pagination {

    private _ending_before: string;
    private _starting_after: string;
    private _limit: number;
    private _order: string;
    private _previous_uri: string;
    private _next_uri: string;

    
    constructor( json: any ) {

        this._ending_before = json.ending_before;
        this._starting_after = json.starting_after;
        this._limit = json.limit;
        this._order = json.order;
        this._previous_uri = json.previous_uri;
        this._next_uri = json.next_uri;

    }
    
    get ending_before(): string {
        return this._ending_before;
    }

    set ending_before( value: string ) {
        this._ending_before = value;
    }
    
    get starting_after(): string {
        return this._starting_after;
    }

    set starting_after( value: string ) {
        this._starting_after = value;
    }
    
    get limit(): number {
        return this._limit;
    }

    set limit( value: number ) {
        this._limit = value;
    }
    
    get order(): string {
        return this._order;
    }

    set order( value: string ) {
        this._order = value;
    }
    
    get previous_uri(): string {
        return this._previous_uri;
    }

    set previous_uri( value: string ) {
        this._previous_uri = value;
    }
    
    get next_uri(): string {
        return this._next_uri;
    }

    set next_uri( value: string ) {
        this._next_uri = value;
    }
}