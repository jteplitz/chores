var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var Background = (function () {
    function Background(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    Object.defineProperty(Background.prototype, "url", {
        set: function (value) {
            //this.renderer.setElementStyle(this.el, "background-image", "url('" + value + "');");
            this.renderer.setElementStyle(this.el, "background-image", "url('" + value + "')");
        },
        enumerable: true,
        configurable: true
    });
    Background = __decorate([
        angular2_1.Directive({
            selector: '[background]',
            properties: ['url: background-url']
        }), 
        __metadata('design:paramtypes', [angular2_1.Renderer, angular2_1.ElementRef])
    ], Background);
    return Background;
})();
var Chore = (function () {
    function Chore(el) {
        var checkbox = el.nativeElement.getElementsByTagName("label")[0];
        componentHandler.upgradeElement(checkbox, "MaterialCheckbox");
        componentHandler.upgradeElement(checkbox, "MaterialRipple");
    }
    Chore = __decorate([
        angular2_1.Component({
            selector: "chore",
            properties: ["chore"]
        }),
        angular2_1.View({
            templateUrl: "views/chore.html"
        }), 
        __metadata('design:paramtypes', [angular2_1.ElementRef])
    ], Chore);
    return Chore;
})();
var ChorePerson = (function () {
    function ChorePerson() {
    }
    ChorePerson = __decorate([
        angular2_1.Component({
            selector: "chore-person",
            properties: ['person']
        }),
        angular2_1.View({
            templateUrl: "views/chore-person.html",
            directives: [Background, Chore, angular2_1.NgFor, angular2_1.NgIf]
        }), 
        __metadata('design:paramtypes', [])
    ], ChorePerson);
    return ChorePerson;
})();
exports.ChorePerson = ChorePerson;
