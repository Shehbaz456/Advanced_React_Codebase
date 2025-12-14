import { useState } from "react";
import TodoList from "../components/TodoList";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [toggleedit, setToggleEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  function hendleChange(e) {
    console.log(e.target.value);
    setTask(e.target.value);
  }

  function hendleSubmit(e) {
    e.preventDefault();
    if (!task.trim()) return;

    if (toggleedit && editIndex !== null) {
      const updatedtodo = todos.map((todo) =>
        todo.id === editIndex ? { ...todo, task: task.trim() } : todo
      );
      console.log("updated Todo ", updatedtodo);

      setTodos(updatedtodo);
      setTask("");
      setToggleEdit(!toggleedit);
    } else {
      // Add todo
      let newTodo = {
        id: Date.now(),
        task: task.trim(),
      };
      setTodos([...todos, newTodo]);
      setTask("");
    }
    console.log(todos);
  }
  function handleDeletTodo(id) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }
  function handleEditTodo(id) {
    console.log("edit todo handler", todos);
    let editTask = todos.find((todo) => todo.id === id);
    console.log("edit todo handler task", editTask.task);
    setTask(editTask.task);
    setToggleEdit(!toggleedit);
    setEditIndex(id);
  }
  return (
    <>
      <h3>TODO APP</h3>
      <form action="" onSubmit={hendleSubmit}>
        <input
          type="text"
          placeholder="Enter todo..."
          value={task}
          onChange={hendleChange}
        />
        <button type="submit">{toggleedit ? "Edit Todo" : "Add Todo"}</button>
      </form>
      <TodoList
        todos={todos}
        handleDeletTodo={handleDeletTodo}
        handleEditTodo={handleEditTodo}
      />
    </>
  );
}

export default Todo;
