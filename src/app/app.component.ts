import {Component, OnInit} from '@angular/core';
import {PluginStoreService} from "./plugable/plugin-store.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private plugin: PluginStoreService) {

  }

  ngOnInit() {
    this.plugin.loadPlugin(<any>{
      url: '/assets/plugin-module.js',
      selector: 'app-plugin-component',
      moduleName: 'PluginModule'
    }).then(data=> console.log(data))

  }
}
