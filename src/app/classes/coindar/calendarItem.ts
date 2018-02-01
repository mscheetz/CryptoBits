/**
 * Represents a Coindar calendar item.
 */
export class CalendarItem {

    private _caption: string;
    private _proof: string;
    private _caption_ru: string;
    private _proof_ru: string;
    private _public_date: Date;
    private _start_date: Date;
    private _end_date: Date;
    private _coin_name: string;
    private _coin_symbol: string;

    constructor (json: any) {

        this._caption = json.caption;
        this._proof = json.proof;
        this._caption_ru = json.caption_ru;
        this._proof_ru = json.proof_ru;
        this._public_date = json.public_date;
        this._start_date = json.start_date;
        this._end_date = json.end_date;
        this._coin_name = json.coin_name;
        this._coin_symbol = json.coin_symbol;

    }

    get caption(): string {
        return this._caption;
    }

    set caption(value: string) {
        this._caption = value;
    }

    get proof(): string {
        return this._proof;
    }

    set proof(value: string) {
        this._proof = value;
    }

    get caption_ru(): string {
        return this._caption_ru;
    }

    set caption_ru(value: string) {
        this._caption_ru = value;
    }

    get proof_ru(): string {
        return this._proof_ru;
    }

    set proof_ru(value: string) {
        this._proof_ru = value;
    }

    get public_date(): Date {
        return this._public_date;
    }

    set public_date(value: Date) {
        this._public_date = value;
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

    get coin_name(): string {
        return this._coin_name;
    }

    set coin_name(value: string) {
        this._coin_name = value;
    }

    get coin_symbol(): string {
        return this._coin_symbol;
    }

    set coin_symbol(value: string) {
        this._coin_symbol = value;
    }
}