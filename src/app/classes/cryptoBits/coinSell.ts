import { Location } from "./location";

/**
 * Represents a coin sale
 */
export class CoinSell {
    private quantity: number;
    private pair: string;
    private price: number;
    private date: Date;
    private location: Location;
}