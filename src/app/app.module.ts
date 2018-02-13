import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PortfolioComponent } from './ui/portfolio/portfolio.component';
import { ApiInfoComponent } from './ui/apiInformation/apiInfo.component';
import { NewTransactionComponent } from './ui/newTransaction/newTransaction.component';


@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    ApiInfoComponent,
    NewTransactionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
