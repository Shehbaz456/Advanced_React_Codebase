import {useState} from "react";

function TodoList({
  todos,
  editTodo,taskInput,
  deleteTodo,
  toggleTodo,
}) {

    const isEmpty = (str) => str.trim() === "";
    let [editInput,setEditInput] = useState("");
    let [editId,setEditId] = useState(null);

      const handleTaskEditbtn = (id,taskInput) =>{
    setEditId(id);
    setEditInput(taskInput);
  }

 const saveTextEdit = (id) =>{
  if (isEmpty(editInput)) {
      alert("Please enter a edit task");
      return;
    }
      editTodo(id,editInput);
      setEditId(null);
      setEditInput("");
  }  

  return (
    <div className="flex justify-center">
      <div className="min-w-6/12">
        {todos.length === 0 && (
          <p className="bg-blue-200 p-3 text-xl rounded-xl text-center">
            Tasks not found
          </p>
        )}

        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center justify-between mb-4 bg-blue-300 p-4 text-xl rounded-xl"
          >
            {/* LEFT SECTION */}
            <div className="flex items-center gap-4 w-full">
              {/* Larger checkbox */}
              <input
                type="checkbox" checked={todo.completed} onChange={()=>toggleTodo(todo.id)}
                className="w-6 h-6 accent-green-600"
              />

              {/* Input or text */}
              {editId === todo.id ? (
                <input
                  value={editInput}  autoFocus
                  onChange={(e) => setEditInput(e.target.value)}
                  className="flex-1 bg-white/60 p-2 rounded-xl border-2 border-blue-400 focus:outline-none"
                  placeholder="Edit your task"
                />
              ) : (
                  <p className={`m-1 flex-1 text-black  ${ todo.completed ? "line-through": "" } `}>{todo.task}</p>

              )}
            </div>

            {/* RIGHT BUTTONS */}
            <div className="flex items-center gap-3 ml-4">
              {editId === todo.id ? (
                <button
                  onClick={() => saveTextEdit(todo.id)}
                  className="bg-green-300 text-white px-4 py-2 rounded-xl shadow"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleTaskEditbtn(todo.id, todo.task)}
                  className="bg-gray-300 text-white px-4 py-2 rounded-xl shadow"
                >
                  ✏️
                </button>
              )}
              <button
                onClick={() => deleteTodo(todo.id)}
                className="bg-red-300 text-white px-4 py-2 rounded-xl shadow"
              >
                ❌
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;












// function TodoList({ todos, deleteTodo, toggleTodo, handleEdit }) {
//   return (
//     <ul className="mt-5 w-96">
//       {todos.map((todo) => (
//         <li
//           key={todo.id}
//           className="flex justify-between items-center p-3 bg-gray-200 rounded-lg mb-2"
//         >
//           <span
//             onClick={() => toggleTodo(todo.id)}
//             className={`cursor-pointer text-lg ${todo.completed ? "line-through text-gray-500" : ""}`}
//           >
//             {todo.task}
//           </span>

//           <div className="flex gap-2">
//             <button
//               onClick={() => handleEdit(todo.id)}
//               className="bg-yellow-400 text-white px-3 py-1 rounded"
//             >
//               Edit
//             </button>
//             <button
//               onClick={() => deleteTodo(todo.id)}
//               className="bg-red-500 text-white px-3 py-1 rounded"
//             >
//               Del
//             </button>
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default TodoList;
