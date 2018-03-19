import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {PluginStoreService} from "./plugable/plugin-store.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PluginStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
