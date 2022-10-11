const { observable } = require("mobx");

export default class TodoStore {
  @observable
  todos = [];
}