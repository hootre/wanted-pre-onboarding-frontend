import React, { useEffect } from "react";
import { TodoStyled } from "./style";
import { TodoItem } from "../../components/TodoItem";
import { TodoInput } from "../../components/TodoInput";
import { useUser } from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import { useTodo } from "../../hooks/useTodo";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const Todo = () => {
  const navigate = useNavigate();
  const { getItem } = useLocalStorage();
  const { logOut } = useUser();
  const { TodoList, getTodoList, addTodo, deleteTodo, updateTodo } = useTodo();
  //logout
  const handleLogOut = (e) => {
    e.preventDefault();
    logOut();
    navigate("/");
  };
  useEffect(() => {
    console.log("tlfgod");
    const user = getItem("user");
    getTodoList();
    if (!user) {
      navigate("/signin");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <TodoStyled>
      <TodoInput addTodo={addTodo} />
      <div className="todoList">
        <ul>
          {TodoList.sort((a, b) => b.id - a.id).map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
            />
          ))}
        </ul>
      </div>

      <button className="logout" onClick={handleLogOut}>
        로그아웃
      </button>
    </TodoStyled>
  );
};
