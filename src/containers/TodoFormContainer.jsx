import { observe } from "mobx";
import { inject } from "mobx-react";

const { useCallback } = require("react");
const TodoForm = require("../components/TodoForm")

const TodoFormContainer = ({ todoStore }) => {
  const add = useCallback((text) => {
    todoStore.add(text);
  }, [todoStore]); 

  return <TodoForm add={add}/>;
}

export default inject("todoStore")(observe(TodoForm));
