/// <reference path="typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, NgFor} from 'angular2/angular2';
import {ChorePerson} from "./chore-person";
@Component({
  selector: "chores"
})
@View({
  templateUrl: "views/chores.html",
  directives: [ChorePerson, NgFor]
})
class Chores{
  people: List<any> = [
    {
      id: 1,
      name: "Jason",
      image: "images/jason.jpg",
      chores: [
      ]
    },
    {
      id: 2,
      name: "Yanni",
      image: "images/yanni.jpg",
      chores: [
      ]
    },
    {
      id: 3,
      name: "Sydney",
      image: "images/sydney.jpg",
      chores: [
        "Clean Bathroom",
        "Clean Living Room"
      ]
    },
    {
      id: 4,
      name: "Mike",
      image: "images/mike.jpg",
      chores: [
        "dishes"
      ]
    },
    {
      id: 5,
      name: "Bogac",
      image: "images/bogac.jpg",
      chores: [
        "Take out Trash"
      ]
    }
  ];
  constructor(){}
}
bootstrap(Chores);
