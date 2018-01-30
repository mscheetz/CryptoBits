/**
 * Represents a Coinbase resource hash.
 */
export class ResourceHash {

    private _id: string;
    private _resource: string;
    private _resource_path: string;

    constructor(json:any) {

        this._id = json.id;
        this._resource = json.resource;
        this._resource_path = json.resource_path;

    }

    get id(): string {
        return this._id;
    }

    set id( value: string ) {
        this._id = value;
    }

    get resource(): string {
        return this._resource;
    }

    set resource( value: string ) {
        this._resource = value;
    }

    get resource_path(): string {
        return this._resource_path;
    }

    set resource_path( value: string ) {
        this._resource_path = value;
    }
}