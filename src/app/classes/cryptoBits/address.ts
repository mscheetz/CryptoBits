/**
 * Represents a single address object
 */
export class Address {
    private _address: string;
    private _name: string;

    constructor() {
        this._address = "";
        this._name = "";
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}