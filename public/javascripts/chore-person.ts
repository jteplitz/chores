/// <reference path="typings/angular2/angular2.d.ts" />
import {
  Renderer, Directive, Component, View, bootstrap, ElementRef, NgFor, NgIf
} from 'angular2/angular2';
import {ChoreStore} from "./chore_store";

@Directive({
  selector: '[background]',
  properties: ['url: background-url']
})
class Background{
  constructor(private renderer: Renderer, private el: ElementRef){
  }
  set url(value: string){
    //this.renderer.setElementStyle(this.el, "background-image", "url('" + value + "');");
    this.renderer.setElementStyle(this.el, "background-image", `url('images/${value}')`);
  }
}

@Component({
  selector: "chore",
  properties: ["chore"],
  appInjector: [ChoreStore]
})
@View({
  templateUrl: "views/chore.html",
  directives: [NgIf]
})
class Chore{
  public _chore;
  constructor(public el: ElementRef, private choreStore: ChoreStore){
  }
  
  set chore(value){
    this._chore = value;
    var checkbox = this.el.nativeElement.getElementsByTagName("input")[0];
    if (value.completed){
      checkbox.setAttribute("checked", true);
    } else {
      checkbox.removeAttribute("checked");
    }
    checkbox = this.el.nativeElement.getElementsByTagName("label")[0];
    componentHandler.upgradeElement(checkbox, "MaterialCheckbox");
    componentHandler.upgradeElement(checkbox, "MaterialRipple");
  }
  
  handleClick(){
    this._chore.completed = !this._chore.completed;
    this.choreStore.changeStatus(this._chore._id, this._chore.completed);
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
