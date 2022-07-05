import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentHeaderComponent } from './component-header/component-header.component';
import { ComponentLeftComponent } from './component-left/component-left.component';
import { ComponentReaderComponent } from './component-reader/component-reader.component';
import { ComponentWriterComponent } from './component-writer/component-writer.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentHeaderComponent,
    ComponentLeftComponent,
    ComponentReaderComponent,
    ComponentWriterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
