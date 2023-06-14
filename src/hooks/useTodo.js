import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const API_URL = `https://www.pre-onboarding-selection-task.shop`;

export const useTodo = () => {
  const [TodoList, setTodoList] = useState([]);
  const { getItem } = useLocalStorage();
  // get TodoList
  const getTodoList = async () => {
    const user = getItem("user");
    try {
      const res = await fetch(`${API_URL}/todos`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user}`,
        },
      });
      if (res.status === 200) {
        const data = await res.json();
        setTodoList(data);
      } else {
        console.log("리스트 가져오기 실패");
      }
    } catch (error) {
      console.error("리스트 가져오기 에러:", error);
    }
  };
  // add Todo
  const addTodo = async (newTodo) => {
    const user = getItem("user");
    try {
      const res = await fetch(`${API_URL}/todos`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          todo: newTodo,
        }),
      });

      if (res.status === 201) {
        const data = await res.json();
        setTodoList([...TodoList, data]);
      } else {
        console.log("리스트 추가하기 실패");
      }
    } catch (error) {
      console.error("리스트 추가하기 에러:", error);
    }
  };
  // delete Todo
  const deleteTodo = async (todoId) => {
    const user = getItem("user");
    try {
      const res = await fetch(`${API_URL}/todos/${todoId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user}`,
        },
      });

      if (res.status === 204) {
        console.log("삭제성공");
        setTodoList(TodoList.filter((todo) => todo.id !== todoId));
      } else {
        console.log("리스트 삭제하기 실패");
      }
    } catch (error) {
      console.error("리스트 삭제하기 에러:", error);
    }
  };

  // updateTodo
  const updateTodo = async (todoId, TodoText, isCheck) => {
    const user = getItem("user");
    try {
      const res = await fetch(`${API_URL}/todos/${todoId}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${user}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          todo: TodoText,
          isCompleted: isCheck,
        }),
      });

      if (res.status === 200) {
        const curTodo = await res.json();
        const resultTodo = TodoList.map((todo) => {
          if (todo.id === curTodo.id) {
            return curTodo;
          }
          return todo;
        });
        setTodoList(resultTodo);
      } else {
        console.log("리스트 수정하기 실패");
      }
    } catch (error) {
      console.error("리스트 수정하기 에러:", error);
    }
  };

  return {
    TodoList,
    addTodo,
    getTodoList,
    deleteTodo,
    updateTodo,
  };
};
