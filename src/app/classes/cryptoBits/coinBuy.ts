import { CoinSell } from "./coinSell";
import { Location } from "./location";

/**
 * Represents a coin buy
 */
export class CoinBuy {
    private quantity: number;
    private pair: string;
    private price: number;
    private date: Date;
    private location: Location;
    private coinSell: CoinSell[];
}