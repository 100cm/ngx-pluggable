import {Compiler, Injectable, Injector} from '@angular/core';
import * as AngularCore from '@angular/core';
import * as AngularCommon from '@angular/common';
import * as AngularForm from '@angular/forms'

export class Plugin {
  name: string
  keycode: string
  url: string
  selector: string
  moduleName: string
  pluginComponent: any;
}


@Injectable()
export class PluginStoreService {

  plugins: Array<Plugin> = []
  private compiler: Compiler;

  constructor(private injector: Injector) {
    this.compiler = this.injector.get(Compiler);
  }

  loadPlugin(plugin: Plugin, extraModule = {}): Promise<any> {
    return fetch(plugin.url).then(response => response.text()).then(response => response)
      .then(source => {
        const exports = {};
        const modules = {
          '@angular/core': AngularCore,
          '@angular/common': AngularCommon,
          '@angular/forms': AngularForm,
          ...extraModule
        };

        const require = (module) => modules[module];
        eval(source);
        const mwcf = this.compiler.compileModuleAndAllComponentsSync(exports[plugin.moduleName]);

        const componentFactory = mwcf.componentFactories
          .find(e => e.selector === plugin.selector); // find the entry component
        if (componentFactory) {
          this.plugins.push(<any>{...plugin, pluginComponent: componentFactory})
        }
        return {...plugin, pluginComponent: componentFactory}
      });
  }
}
