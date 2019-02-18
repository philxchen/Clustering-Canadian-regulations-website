import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material-module';
import { AppComponent } from './app.component';
import { PlotComponent } from './plot/plot.component';


@NgModule({
  declarations: [
    AppComponent,
    PlotComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
