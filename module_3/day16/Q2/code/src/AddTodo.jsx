import React, { useContext, useState } from "react";
import { TodoContext } from "./Todos";

const AddTodo = () => {
  const { addTodo } = useContext(TodoContext);
  const [text, setText] = useState("");

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          addTodo(text);
          setText("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
