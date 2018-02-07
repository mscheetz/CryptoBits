import { Transaction } from "./transaction";
import { CoinEvent } from "./coinEvent";
import { CoinWallet } from "./coinWallet";
import { CoinTicker } from "./coinTicker";

/**
 * Represents coin information.
 */
export class CoinInformation {

    private _symbol: string;
    private _name: string;
    private _wallet: CoinWallet[];
    private _events: CoinEvent[];
    private _ticker: CoinTicker;

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

    get wallet(): CoinWallet[] {
        return this._wallet;
    }

    set wallet(value: CoinWallet[]) {
        this._wallet = value;
    }

    get events(): CoinEvent[] {
        return this._events;
    }

    set events(value: CoinEvent[]) {
        this._events = value;
    }

    get ticker(): CoinTicker {
        return this._ticker;
    }

    set ticker(value: CoinTicker) {
        this._ticker = value;
    }
}