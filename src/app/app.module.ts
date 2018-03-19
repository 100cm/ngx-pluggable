import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {PluginStoreService} from "./plugable/plugin-store.service";
import {PlugableModule} from "./plugable/ngx-plugable.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    PlugableModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
