import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StatiicAGGridComponent } from './statiic-ag-grid/statiic-ag-grid.component';
import { DynamicAGGridComponent } from './dynamic-ag-grid/dynamic-ag-grid.component';
import { FeaturesAGGridComponent } from './features-ag-grid/features-ag-grid.component';
import { CustomizedCRAGGridComponent } from './customized-cr-ag-grid/customized-cr-ag-grid.component';
import { AnimatedAGGridComponent } from './animated-ag-grid/animated-ag-grid.component';

@NgModule({
  declarations: [
       AppComponent,
       StatiicAGGridComponent,
       DynamicAGGridComponent,
       FeaturesAGGridComponent,
       CustomizedCRAGGridComponent,
       AnimatedAGGridComponent
     ],
  imports: [
    AgGridModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule {}