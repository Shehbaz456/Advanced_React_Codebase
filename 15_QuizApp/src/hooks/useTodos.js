import { useEffect, useState } from "react";

function useTodos() {
  let [todos, setTodos] = useState(() => {
    try {
    return JSON.parse(localStorage.getItem("todos")) || [];
  } catch {
    return [];
  }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const addTodo = (task) => {
    const newTodo = {
      id: Date.now(),
      task,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };
  const editTodo = (id, newTask) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, task: newTask } : todo))
    );
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return {
    todos,
    addTodo,
    editTodo,
    toggleTodo,
    deleteTodo,
  };
}

export default useTodos;
