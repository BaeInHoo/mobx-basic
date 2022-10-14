const { observable, action, makeObservable } = require("mobx");

export default class TodoStore {
  @observable
  todos = [];

  @action
  add() {
    this.todos.push({text, done: false});
  }

  constructor() {
    makeObservable(this);
  }
} 