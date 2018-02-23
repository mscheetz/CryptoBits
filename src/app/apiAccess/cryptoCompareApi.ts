import { HttpClient } from "@angular/common/http";
import { CryptoCompareCoin } from "../classes/cryptoCompare/CryptoCompareCoin";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { retry } from "rxjs/operators";

@Injectable()
export class CryptoCompareApi {
    private baseUrl: string = "https://www.cryptocompare.com";

    constructor(private http: HttpClient){}

    getCoins(): Observable<CryptoCompareCoin[]> {
        let url:string = this.baseUrl + "/api/data/coinlist/";

        return this.http.get<CryptoCompareCoin[]>(url)
                        .pipe(
                            retry(3)
                        );
    }
}