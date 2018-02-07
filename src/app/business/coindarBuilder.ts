import { CoindarApi } from "../apiAccess/coindarApi";
import { CoinEvent } from "../classes/cryptoBits/coinEvent";
import { CalendarItem } from "../classes/coindar/calendarItem";

/**
 * Build Coindar api information to CryptoBits information
 */
export class CoindarBuilder {
    private _api;
    private _coinEvents: CoinEvent[];

    constructor() {
        this._api = new CoindarApi();
    }

    /**
     * Get Events for a specific coin
     * @param symbol        Coin symbol
     */
    public GetCoindarInfo(symbol: string): CoinEvent[] {
        let coinEvents: CoinEvent[] = [];
        let coindarItems: CalendarItem[];

        this._api.GetCoindarInfo(symbol).then(result => coindarItems == result);

        coindarItems.forEach(item => {
            coinEvents.push(this.CoindarToCryptoBits(item));
        });

        return coinEvents;
    }

    /**
     * Convert a Coindar api item to cryptobits event item
     * @param item          Coindar api item
     */
    public CoindarToCryptoBits(item: CalendarItem): CoinEvent {
        let coinEvent: CoinEvent;

        coinEvent.date = item.public_date;
        coinEvent.end_date = item.end_date;
        coinEvent.name = item.caption;
        coinEvent.source = item.proof;
        coinEvent.start_date = item.start_date;

        return coinEvent;
    }
}