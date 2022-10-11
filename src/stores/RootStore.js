import PersonStore from "./PersonStore";
import TodoStore from "./TodoStore";

export default class RootStore {
  constructor() {
    this.todoStore = new TodoStore();
    this.personStore = new PersonStore();
  }
}