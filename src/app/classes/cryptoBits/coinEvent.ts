/**
 * Represents a coin event.
 */
export class CoinEvent {

    private _name: string;
    private _source: string;
    private _date: Date;
    private _start_date: Date;
    private _end_date: Date;

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get source(): string {
        return this._source;
    }

    set source(value: string) {
        this._source = value;
    }

    get date(): Date {
        return this._date;
    }

    set date(value: Date) {
        this._date = value;
    }

    get start_date(): Date {
        return this._start_date;
    }

    set start_date(value: Date) {
        this._start_date = value;
    }

    get end_date(): Date {
        return this._end_date;
    }

    set end_date(value: Date) {
        this._end_date = value;
    }

}