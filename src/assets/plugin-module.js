"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var core_2 = require("@angular/core");
var forms_1 = require("@angular/forms");
/**
 * Created by atyun on 7/31/17.
 * 标签（内容的）
 */
var Tag = /** @class */ (function () {
    function Tag() {
        this.name = '';
        this.color = '';
    }
    return Tag;
}());
exports.Tag = Tag;
/**
 * Created by atyun on 7/17/17.
 * 内容实体类
 */
var Content = /** @class */ (function () {
    function Content(name, category) {
        if (name === void 0) { name = ''; }
        if (category === void 0) { category = ''; }
        // /**
        //  * id
        //  * @type {string}
        //  */
        // project_id: string = ''
        /**
         * id
         * @type {string}
         */
        this.id = '';
        /**
         * 文章
         * @type {string}
         */
        this.page_content = '';
        /**
         * 封面
         * @type {string}
         */
        this.cover = '';
        this.banner = '';
        /**
         * tag 标签 ，用于显示作用的标签，非打标签
         * @type {Tag}
         */
        this.tag = new Tag();
        /**
         * 标题
         * @type {string}
         */
        this.title = '';
        /**
         * 副标题
         * @type {string}
         */
        this.subtitle = '';
        /**
         * 栏目
         * @type {string}
         */
        this.category = '';
        this.id = '';
        this.content_name = name;
        this.page_content = '';
        this.cover = '';
        this.tag = new Tag();
        this.title = '';
        this.subtitle = '';
        this.category = category;
        this.child_category = '';
        this.template_id = '';
        this.seq = 0;
        this.nav_id = null;
        this.nav_link = '';
        this.status = 'published';
        this.link = '';
        this.child_contents = [];
        this.banner = '';
        this.is_add = false;
        this.parent_id = '';
        this.theme = 'common';
        this.col = 24;
        this.layout = 'common';
        this.country_id = '';
        this.show_child = true;
        this.background_color = null;
        this.height = null;
        this.width = null;
        this.content_category = '';
        this.background_filter = '';
        this.background_filter_global = false;
        this.column_index = 0;
        this.freedom_grid_config = { col: 1, row: 1, sizex: 3, sizey: 1 };
        this.desc = '';
        this.target_blank = true;
        // this.project_id = ''
    }
    return Content;
}());
exports.Content = Content;
var PluginComponent = /** @class */ (function () {
    function PluginComponent() {
    }
    Object.defineProperty(PluginComponent.prototype, "content", {
        get: function () {
            return this._content;
        },
        set: function (value) {
            this._content = value;
        },
        enumerable: true,
        configurable: true
    });
    PluginComponent.prototype.ngOnInit = function () {
        if (this.content) {
            this.content.title == '' ? this.content.title = '大标题' : this.content.title;
            this.content.subtitle == '' ? this.content.subtitle = '<em>大标题</em>' : this.content.subtitle;
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], PluginComponent.prototype, "content", null);
    __decorate([
        core_1.ViewChild('title_content'),
        __metadata("design:type", core_1.ElementRef)
    ], PluginComponent.prototype, "titleContent", void 0);
    PluginComponent = __decorate([
        core_2.Component({
            selector: 'app-plugin-component',
            template: "\n    <div [attr.id]=\"'scroll_content_'+content?.id\"\n         class=\"section-wrapper\"\n         [ngStyle]=\"{backgroundColor: content?.background_color || ''}\"\n    >\n      <div class=\"y-section y-title\" [style.background]=\"'url('+content.background+')'\" [style.background-size]=\"'100%'\"\n           #title_content>\n        {{content.title}}\n      </div>\n      <!--<atyun-plugin-text [(ngModel)]=\"content.title\"></atyun-plugin-text>-->\n    </div>\n\n  "
        })
    ], PluginComponent);
    return PluginComponent;
}());
exports.PluginComponent = PluginComponent;
var PluginModule = /** @class */ (function () {
    function PluginModule() {
    }
    PluginModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
            ],
            declarations: [PluginComponent],
            entryComponents: [PluginComponent],
        })
    ], PluginModule);
    return PluginModule;
}());
exports.PluginModule = PluginModule;
