import { Transaction } from "./transaction";
import { CoinEvent } from "./coinEvent";

/**
 * Represents coin information.
 */
export class CoinInformation {

    private _symbol: string;
    private _name: string;
    private _image_url: string;
    private _quantity: number;
    private _location: string;
    private _events: CoinEvent[];

    get symbol(): string {
        return this._symbol;
    }

    set symbol(value: string) {
        this._symbol = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get image_url(): string {
        return this._image_url;
    }

    set image_url(value: string) {
        this._image_url = value;
    }

    get quantity(): number {
        return this._quantity;
    }

    set quantity(value: number) {
        this._quantity = value;
    }

    get location(): string {
        return this._location;
    }

    set location(value: string) {
        this._location = value;
    }

    get events(): CoinEvent[] {
        return this._events;
    }

    set events(value: CoinEvent[]) {
        this._events = value;
    }
}