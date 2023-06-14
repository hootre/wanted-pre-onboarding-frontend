import React, { useState } from "react";
import { TodoItemStyled } from "./style";

export const TodoItem = ({ todo, deleteTodo, updateTodo }) => {
  const [todoText, setTodoText] = useState(todo.todo);
  const [isCheck, setIsCheck] = useState(todo.isCompleted);
  const [isUpdate, setIsUpdate] = useState();
  const handleChange = (event) => {
    setTodoText(event.target.value);
  };
  // key down
  const handleUpdateKeyPress = (e) => {
    if (e.key === "Enter") {
      handleUpdate();
    }
  };
  // check update
  const onToggleCheck = (e) => {
    e.preventDefault();
    setIsCheck((prev) => !prev);
    updateTodo(todo.id, todoText, !isCheck);
  };

  // 수정버튼
  const onToggleUpdate = (e) => {
    e.preventDefault();
    setTodoText(todo.todo);
    setIsUpdate((prev) => !prev);
  };
  // update
  const handleUpdate = () => {
    if (todoText.trim() === "") {
      alert("값을 입력해주세요");
      return;
    } else if (todoText === todo.todo) {
      alert("같은 내용입니다.");
      setIsUpdate(false);
      return;
    }
    updateTodo(todo.id, todoText, isCheck);
    setIsUpdate(false);
  };
  // delete
  const handleDelete = (e) => {
    e.preventDefault();
    deleteTodo(todo.id);
  };
  return (
    <TodoItemStyled className="todo-list">
      <div className="todo_content">
        <label
          className={`todo ${isUpdate && "update"}`}
          onClick={onToggleCheck}
        >
          <svg
            viewBox="0 0 0 0"
            style={{ position: "absolute", zIndex: -1, opacity: 0 }}
          >
            <defs>
              <linearGradient
                id="boxGradient"
                gradientUnits="userSpaceOnUse"
                x1="0"
                y1="0"
                x2="25"
                y2="25"
              >
                <stop offset="0%" stopColor="#ff359b" />
                <stop offset="100%" stopColor="#c7c571" />
              </linearGradient>

              <linearGradient id="lineGradient">
                <stop offset="0%" stopColor="#c7c571" />
                <stop offset="100%" stopColor="#ff359b" />
              </linearGradient>

              <path
                id="todo__line"
                stroke="url(#lineGradient)"
                d="M21 12.3h168v0.1z"
              ></path>
              <path
                id="todo__box"
                stroke="url(#boxGradient)"
                d="M21 12.7v5c0 1.3-1 2.3-2.3 2.3H8.3C7 20 6 19 6 17.7V7.3C6 6 7 5 8.3 5h10.4C20 5 21 6 21 7.3v5.4"
              ></path>
              <path
                id="todo__check"
                stroke="url(#boxGradient)"
                d="M10 13l2 2 5-5"
              ></path>
              <circle id="todo__circle" cx="13.5" cy="12.5" r="10"></circle>
            </defs>
          </svg>
          <input
            className={`todo__state`}
            type="checkbox"
            checked={isCheck}
            onChange={onToggleCheck}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 200 25"
            className="todo__icon"
          >
            <use xlinkHref="#todo__line" className="todo__line"></use>
            <use xlinkHref="#todo__box" className="todo__box"></use>
            <use xlinkHref="#todo__check" className="todo__check"></use>
            <use xlinkHref="#todo__circle" className="todo__circle"></use>
          </svg>
        </label>
        {isUpdate ? (
          <input
            data-testid="modify-input"
            className="update_input"
            value={todoText}
            onChange={handleChange}
            onKeyDown={handleUpdateKeyPress}
          />
        ) : (
          <span className={`todo__text ${isCheck && "update"}`}>
            {todoText}
          </span>
        )}
      </div>
      {isUpdate ? (
        <div className="button_update_box">
          <button data-testid="submit-button" onClick={handleUpdate}>
            제출
          </button>
          <button data-testid="cancel-button" onClick={onToggleUpdate}>
            취소
          </button>
        </div>
      ) : (
        <div className="button_box">
          <button data-testid="modify-button" onClick={onToggleUpdate}>
            수정
          </button>
          <button data-testid="delete-button" onClick={handleDelete}>
            삭제
          </button>
        </div>
      )}
    </TodoItemStyled>
  );
};
