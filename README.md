# AngularPluggable


插件化开发 Angular 组建

将编译好的angular 单文件组件以插件化形式加载进我们的项目中


##usage

```ts
//在跟模块中引入

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
 ->PlugableModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

在组件中使用：

```ts
  constructor(private plugin: PluginStoreService) {

  }

  ngOnInit() {
    this.plugin.loadPlugin(<any>{
      url: '/assets/plugin-module.js',
      selector: 'app-plugin-component',
      moduleName: 'PluginModule'
    }).then(data=> console.log(data))
  }
```

#### Plugin 参数

------
| 参数名称 | 注释 | 默认值 |
| ------------- |:-------------:| -----:|
| name:string | 插件名称 | 无 |
| keycode:string | 插件key （唯一uniqe） |无|
| url:string | 插件地址( http://xxx.xx.js) |无|
| selector:string | 插件组件件选择器(app-example-component) |无|
| moduleName:string | 插件模块名称(app-module) |无|
| pluginComponent :ComponentFactory | 编译后的组件对象（用作动态渲染） | 无 |



### 方法

`plugin_service.loadPlugin(plugin:Plugin):Promise<any>`

加载插件 返回插件加载后的 plugin 对象



###### 存储所有加载过的插件
`plugin_service.plugins => Array<Plugin>`


欢迎issue

