/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useState } from "react";
import Input from "../../atoms/Input";
import TodoItem from "../../atoms/TodoItem";
import TODO_CONST from "../../config";
import { Todo } from "../../types";

const TodoGroup = () => {
  const [todos, setTodos] = useState<Todo[]>(TODO_CONST);

  const onInsert = useCallback(
    (title: string) => {
      const newTodo = {
        id: String(todos.length + 1),
        text: title,
      };
      setTodos(todos.concat(newTodo));
    },
    [todos]
  );

  return (
    <>
      <h3>TodoGroup Component</h3>
      <Input onInsert={onInsert} />

      <ol>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo}></TodoItem>
        ))}
      </ol>
    </>
  );
};

export default TodoGroup;
