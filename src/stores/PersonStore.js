import { observable, makeObservable } from "mobx";

export default class PersonStore {
  @observable
  name = "Mark";

  @observable
  age = 39;

  get age10() {
    return Math.floor(this.age / 10) * 10;
  }

  constructor() {
    makeObservable(this);
  }

  plus() {
    this.age++;
  }
}
