import React, { useState } from "react";
import { TodoInputStyled } from "./style";

export const TodoInput = ({ addTodo, type }) => {
  const [todoText, setTodoText] = useState("");
  const handleChange = (event) => {
    setTodoText(event.target.value);
  };
  // key down
  const handleUpdateKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };
  // add
  const handleAdd = () => {
    if (todoText.trim() === "") {
      alert("값을 입력해주세요");
      return;
    }
    addTodo(todoText);
    setTodoText("");
  };
  return (
    <TodoInputStyled>
      <input
        data-testid="new-todo-input"
        className="add_input"
        value={todoText}
        onChange={handleChange}
        onKeyDown={handleUpdateKeyPress}
      />

      <button data-testid="new-todo-add-button" onClick={handleAdd}>
        추가
      </button>
    </TodoInputStyled>
  );
};
