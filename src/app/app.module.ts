import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PortfolioComponent } from './ui/portfolio/portfolio.component';
import { ApiInfoComponent } from './ui/apiInformation/apiInfo.component';
import { NewTransactionComponent } from './ui/newTransaction/newTransaction.component';
import { CryptoComponent } from './ui/crypto/crypto.component';
import { UserService } from './services/userService';
import { NinetyNineCryptoApi } from './apiAccess/ninetyNineCryptoApi';
import { CryptoCompareApi } from './apiAccess/cryptoCompareApi';


@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    ApiInfoComponent,
    NewTransactionComponent,
    CryptoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    NinetyNineCryptoApi,
    CryptoCompareApi
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
