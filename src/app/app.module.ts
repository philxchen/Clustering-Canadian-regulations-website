import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material-module';
import { AppComponent } from './app.component';
import { PlotComponent } from './plot/plot.component';
import { ParamsComponent } from './params/params.component';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    PlotComponent,
    ParamsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    MatListModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
