/// <reference path="typings/angular2/angular2.d.ts" />
import {
  Component,
  View,
  bootstrap,
  NgFor,
  Injectable,
  Http,
  RequestOptions,
  Headers,
  httpInjectables
} from 'angular2/angular2';
import {ChorePerson} from "./chore-person";
import {ChoreStore} from "./chore_store";

@Component({
  selector: "chores",
  appInjector: [ChoreStore]
})
@View({
  templateUrl: "views/chores.html",
  directives: [ChorePerson, NgFor]
})
class Chores{
  constructor(private choreStore: ChoreStore){
  }
}
bootstrap(Chores, [httpInjectables]);

export interface Chore{
  name: string,
  completed: boolean
}

interface Person{
  name: string,
  email: string,
  picture: string,
  chores: List<Chore>
}