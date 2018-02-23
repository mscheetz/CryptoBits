/**
 * Represents a single CryptoCompare Coin
 */
export class CryptoCompareCoin {
    private _Id: string;
    private _Url: string;
    private _ImageUrl: string;
    private _Name: string;
    private _Symbol: string;
    private _CoinName: string;
    private _FullName: string;
    private _Algorithm: string;
    private _ProofType: string;
    private _FullyPremined: string;
    private _TotalCoinSupply: string;
    private _PreMinedValue: string;
    private _TotalCoinsFreeFloat: string;
    private _SortOrder: string;
    private _Sponsored: boolean;

    constructor( json: any){
        this._Id = json.Id;
        this._Url = json.Url;
        this._ImageUrl = json.ImageUrl;
        this._Name = json.Name;
        this._Symbol = json.Symbol;
        this._CoinName = json.CoinName;
        this._FullName = json.FullName;
        this._Algorithm = json.Algorithm;
        this._ProofType = json.ProofType;
        this._FullyPremined = json.FullyPremined;
        this._TotalCoinSupply = json.TotalCoinSupply;
        this._PreMinedValue = json.PreMinedValue;
        this._TotalCoinsFreeFloat = json.TotalCoinsFreeFloat;
        this._SortOrder = json.SortOrder;
        this._Sponsored = json.Sponsored;
    }

    get Id(): string {
        return this.Id;
    }

    set Id(value: string) {
        this.Id = value;
    }

    get Url(): string {
        return this._Url;
    }

    set Url(value: string) {
        this._Url = value;
    }

    get ImageUrl(): string {
        return this._ImageUrl;
    }

    set ImageUrl(value: string) {
        this._ImageUrl = value;
    }

    get Name(): string {
        return this._Name;
    }

    set Name(value: string) {
        this._Name = value;
    }

    get Symbol(): string {
        return this._Symbol;
    }

    set Symbol(value: string) {
        this._Symbol = value;
    }

    get CoinName(): string {
        return this._CoinName;
    }

    set CoinName(value: string) {
        this._CoinName = value;
    }

    get FullName(): string {
        return this._FullName;
    }

    set FullName(value: string) {
        this._FullName = value;
    }

    get Algorithm(): string {
        return this._Algorithm;
    }

    set Algorithm(value: string) {
        this._Algorithm = value;
    }

    get ProofType(): string {
        return this._ProofType;
    }

    set ProofType(value: string) {
        this._ProofType = value;
    }

    get FullyPremined(): string {
        return this._FullyPremined;
    }

    set FullyPremined(value: string) {
        this._FullyPremined = value;
    }

    get TotalCoinSupply(): string {
        return this._TotalCoinSupply;
    }

    set TotalCoinSupply(value: string) {
        this._TotalCoinSupply = value;
    }

    get PreMinedValue(): string {
        return this._PreMinedValue;
    }

    set PreMinedValue(value: string) {
        this._PreMinedValue = value;
    }

    get TotalCoinsFreeFloat(): string {
        return this._TotalCoinsFreeFloat;
    }

    set TotalCoinsFreeFloat(value: string) {
        this._TotalCoinsFreeFloat = value;
    }

    get SortOrder(): string {
        return this._SortOrder;
    }

    set SortOrder(value: string) {
        this._SortOrder = value;
    }

    get Sponsored(): boolean {
        return this._Sponsored;
    }

    set Sponsored(value: boolean) {
        this._Sponsored = value;
    }
}