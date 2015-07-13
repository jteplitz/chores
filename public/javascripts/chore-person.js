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
var chore_store_1 = require("./chore_store");
var Background = (function () {
    function Background(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    Object.defineProperty(Background.prototype, "url", {
        set: function (value) {
            //this.renderer.setElementStyle(this.el, "background-image", "url('" + value + "');");
            this.renderer.setElementStyle(this.el, "background-image", "url('images/" + value + "')");
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
    function Chore(el, choreStore) {
        this.el = el;
        this.choreStore = choreStore;
    }
    Object.defineProperty(Chore.prototype, "chore", {
        set: function (value) {
            this._chore = value;
            var checkbox = this.el.nativeElement.getElementsByTagName("input")[0];
            if (value.completed) {
                checkbox.setAttribute("checked", true);
            }
            else {
                checkbox.removeAttribute("checked");
            }
            checkbox = this.el.nativeElement.getElementsByTagName("label")[0];
            componentHandler.upgradeElement(checkbox, "MaterialCheckbox");
            componentHandler.upgradeElement(checkbox, "MaterialRipple");
        },
        enumerable: true,
        configurable: true
    });
    Chore.prototype.handleClick = function () {
        this._chore.completed = !this._chore.completed;
        this.choreStore.changeStatus(this._chore._id, this._chore.completed);
    };
    Chore = __decorate([
        angular2_1.Component({
            selector: "chore",
            properties: ["chore"],
            appInjector: [chore_store_1.ChoreStore]
        }),
        angular2_1.View({
            templateUrl: "views/chore.html",
            directives: [angular2_1.NgIf]
        }), 
        __metadata('design:paramtypes', [angular2_1.ElementRef, chore_store_1.ChoreStore])
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
