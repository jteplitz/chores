/// <reference path="typings/angular2/angular2.d.ts" />
import {
  Renderer, Directive, Component, View, bootstrap, ElementRef, NgFor, NgIf
} from 'angular2/angular2';

@Directive({
  selector: '[background]',
  properties: ['url: background-url']
})
class Background{
  constructor(private renderer: Renderer, private el: ElementRef){
  }
  set url(value: string){
    //this.renderer.setElementStyle(this.el, "background-image", "url('" + value + "');");
    this.renderer.setElementStyle(this.el, "background-image", `url('${value}')`);
  }
}

@Component({
  selector: "chore",
  properties: ["chore"]
})
@View({
  templateUrl: "views/chore.html"
})
class Chore{
  constructor(el: ElementRef){
    var checkbox = el.nativeElement.getElementsByTagName("label")[0];
    componentHandler.upgradeElement(checkbox, "MaterialCheckbox");
    componentHandler.upgradeElement(checkbox, "MaterialRipple");
  }
}

@Component({
  selector: "chore-person",
  properties: ['person']
})
@View({
  templateUrl: "views/chore-person.html",
  directives: [Background, Chore, NgFor, NgIf]
})
export class ChorePerson{
  constructor(){
  }
}
