import { useState } from "react"
import TodoList from "./components/TodoList";
import useTodos from "./hooks/useTodos";

function TodoApp() {
  const isEmpty = (str) => str.trim() === "";
  const { todos, addTodo, editTodo, toggleTodo, deleteTodo} = useTodos();
  let [taskInput,setTaskInput] = useState("");
  let [filter,setFilter] = useState("all");

    let totalfilerTodo = todos.filter((todo)=>{
      if(filter === "completed") return  todo.completed;
      if(filter==="pending") return !todo.completed
      return true;
    }
    )

  const handleAddTask =(e) =>{
    e.preventDefault();
    //  if (task.trim() === "") {
     if (isEmpty(taskInput)) {
      alert("Please enter a task");
      return;
    }
    addTodo(taskInput)
    setTaskInput("");
  };


  console.log("todos ",todos);

  return (
    <>
    <div className="flex justify-center">
    <div className="min-w-4/12 ">
      <h2 className="text-2xl font-bold m-6 text-center ">Todo APP</h2>
      <div className="flex">
        <input onChange={(e)=>setTaskInput(e.target.value)} value={taskInput} className=" flex-1 p-4 text-xl rounded-2xl border-2 border-b-blue-600 outline-none " placeholder="Enter todo "/>
        <button onClick={handleAddTask} className="bg-green-400 px-3 py-2 rounded-2xl text-xl">Add Todo</button>
      </div>
    </div>
    </div>

    <div className="flex justify-center mt-8 mb-4">
  <div className="min-w-6/12 flex items-center justify-between">


    <h2 className="text-3xl font-bold text-blue-700 tracking-wide">
      📝 Todo List
    </h2>
    <div className="flex items-center gap-3 bg-blue-50 px-4 py-2 rounded-xl shadow-sm border border-blue-200">
      <button
       className={`px-3 py-1 rounded-lg text-sm font-medium
              ${filter === "all" ? "bg-blue-600 text-white" : "text-blue-700"}`}
        onClick={() => setFilter("all")}
      >
        All
      </button>

      <button
         className={`px-3 py-1 rounded-lg text-sm font-medium
              ${filter === "completed" ? "bg-green-600 text-white" : "text-green-700"}`}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
      <button
        className={`px-3 py-1 rounded-lg text-sm font-medium
              ${filter === "pending" ? "bg-yellow-600 text-white" : "text-yellow-700"}`}
       onClick={() => setFilter("pending")}
      >
        Pending
      </button>
    </div>
  </div>
</div>  
    <TodoList todos={totalfilerTodo} taskInput={taskInput} editTodo={editTodo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  )
}
export default TodoApp




