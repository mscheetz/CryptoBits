/**
 * A collection of helper functions.
 */
export class Helper {
    /**
     * Convert unix timestamp to date/time
     * @param unix          Unix timestamp
     */
    public GetDateFromUnix(unix: number): Date {
        return new Date(unix * 1000);
    }

    /**
     * Get unix timestamp from current date
     */
    public GetUnixFromDate(): number {
        return new Date().getTime() / 1000;
    }
}