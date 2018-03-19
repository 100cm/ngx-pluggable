import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PluginStoreService} from "./plugin-store.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class PlugableModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PlugableModule,
      providers: [
        // Services
        PluginStoreService
      ]
    };
  }
}
