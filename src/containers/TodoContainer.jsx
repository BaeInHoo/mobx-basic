import { inject, observer } from "mobx-react";
import TodoStore from "../stores/TodoStore";
import Todo from "../components/Todo";

const TodoContainer = () => {
  const todos = TodoStore.todos;

  return <Todo todos={todos}/>;
};

export default inject('todoStore')(observer(TodoContainer));