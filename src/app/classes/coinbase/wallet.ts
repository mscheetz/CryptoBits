import { MoneyHash } from "./moneyHash";

/**
 * Represents a single Coinbase wallet.
 */
export class Wallet {

    private _id: string;
    private _name: string;
    private _primary: boolean;
    private _type: string;
    private _currency: string;
    private _balance: MoneyHash;
    private _createdAt: Date;
    private _updatedAt: Date;
    private _resource: string;
    private _resource_path: string;
    private _ready: boolean;
    
    constructor( json: any ) {

        this._id = json.id;
        this._name = json.name;
        this._primary = json.primary;
        this._type = json.type;
        this._currency = json.currency;
        this._balance = json.balance;
        this._createdAt = json.createdAt;
        this._updatedAt = json.updatedAt;
        this._resource = json.resource;
        this._resource_path = json.resource_path;
        this._ready = json.ready;

    }

    get id(): string {
        return this._id;
    }

    set id( value: string ) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name( value: string ) {
        this._name = value;
    }

    get primary(): boolean {
        return this._primary;
    }

    set primary( value: boolean ) {
        this._primary = value;
    }

    get type(): string {
        return this._type;
    }

    set type( value: string ) {
        this._type = value;
    }

    get currency(): string {
        return this._currency;
    }

    set currency( value: string ) {
        this._currency = value;
    }

    get balance(): MoneyHash {
        return this._balance;
    }

    set balance( value: MoneyHash ) {
        this._balance = value;
    }

    get createdAt(): Date {
        return this._createdAt;
    }

    set createdAt( value: Date ) {
        this._createdAt = value;
    }

    get updatedAt(): Date {
        return this._updatedAt;
    }

    set updatedAt( value: Date ) {
        this._updatedAt = value;
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

    get ready(): boolean {
        return this._ready;
    }

    set ready( value: boolean ) {
        this._ready = value;
    }

}