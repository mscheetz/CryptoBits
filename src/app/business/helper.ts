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

    /**
     * Get a unique values from an array of objects
     * @param list       List to pull unique values from
     * @param prop       Property to unique   
     */
    public Unique(list: any, prop: string): any[]{
        let result: any = [];
        list.filter(function(item){
            var i = result.findIndex(x => x[prop] == item[prop]);
            if(i <= -1){
                result.push(item[prop]);
            }
            return null;
          });

        return result;
    }

    /** 
     * Check if an array contains an object with a property value
     * 
     * @param array         array to check
     * @param prop          property to check
     * @param value         value to match
     */
    public ArrayContains(array: any[], prop: string, value: any): boolean {

        for(let item of array) {
            if(item[prop] === value) {
                return true;
            }
        }

        return false;
    }

    /** 
     * Get index of an object in an array based on a property value
     * 
     * @param array         array to check
     * @param prop          property to check
     * @param value         value to match
     */
    public GetIndex(array: any[], prop: string, value: any): number {
        for(var i = 0; i < array.length; i += 1 ) {
            if(array[i][prop] === value) {
                return i;
            }
        }
        return -1;
    }
}