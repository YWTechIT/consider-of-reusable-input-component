/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useState } from "react";
import Input from "../../atoms/Input";
import TODO_CONST from "../../config";
import { TodoConst } from "../../types";

const TodoGroup = () => {
  const [todos, setTodos] = useState<TodoConst[]>(TODO_CONST);

  const onInsert = useCallback((title: string) => {
    const newTodo = {
        id: String(todos.length + 1),
        text: title,
    }
    setTodos(todos.concat(newTodo));
  }, [todos])

  return (
    <>
      <h3>TodoGroup Component</h3>
      <Input onInsert={onInsert}/>
      {todos.map((val) => (
        <li key={val.id}>{val.text}</li>
      ))}
    </>
  );
};

export default TodoGroup;
