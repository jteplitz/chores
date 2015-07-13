System.register(["angular2/angular2", "angular2/src/facade/lang", "angular2_material/src/core/constants"], function($__export) {
  "use strict";
  var __decorate,
      __metadata,
      __param,
      Component,
      View,
      Attribute,
      isPresent,
      KEY_SPACE,
      NumberWrapper,
      MdSwitch;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
      Attribute = $__m.Attribute;
    }, function($__m) {
      isPresent = $__m.isPresent;
      NumberWrapper = $__m.NumberWrapper;
    }, function($__m) {
      KEY_SPACE = $__m.KEY_SPACE;
    }],
    execute: function() {
      __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
          case 2:
            return decorators.reduceRight(function(o, d) {
              return (d && d(o)) || o;
            }, target);
          case 3:
            return decorators.reduceRight(function(o, d) {
              return (d && d(target, key)), void 0;
            }, void 0);
          case 4:
            return decorators.reduceRight(function(o, d) {
              return (d && d(target, key, o)) || o;
            }, desc);
        }
      };
      __metadata = (this && this.__metadata) || function(k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(k, v);
      };
      __param = (this && this.__param) || function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      MdSwitch = $__export("MdSwitch", (($traceurRuntime.createClass)(function(tabindex) {
        this.checked = false;
        this.tabindex = isPresent(tabindex) ? NumberWrapper.parseInt(tabindex, 10) : 0;
      }, {
        get disabled() {
          return this.disabled_;
        },
        set disabled(value) {
          this.disabled_ = isPresent(value) && value !== false;
        },
        onKeydown: function(event) {
          if (event.keyCode === KEY_SPACE) {
            event.preventDefault();
            this.toggle(event);
          }
        },
        toggle: function(event) {
          if (this.disabled) {
            event.stopPropagation();
            return ;
          }
          this.checked = !this.checked;
        }
      }, {})));
      $__export("MdSwitch", MdSwitch = __decorate([Component({
        selector: 'md-switch',
        properties: ['checked', 'disabled'],
        host: {
          '(keydown)': 'onKeydown($event)',
          '[attr.aria-checked]': 'checked',
          '[attr.aria-disabled]': 'disabled_',
          '[attr.role]': '"checkbox"'
        }
      }), View({
        templateUrl: 'angular2_material/src/components/switcher/switch.html',
        directives: []
      }), __param(0, Attribute('tabindex')), __metadata('design:paramtypes', [String])], MdSwitch));
    }
  };
});
//# sourceMappingURL=switch.js.map

//# sourceMappingURL=./switch.js.map