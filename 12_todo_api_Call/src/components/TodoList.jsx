
function TodoList({todos,handleDeletTodo,handleEditTodo}) {
  return (
    <>
      <h3>Todo List</h3>
      <ul>
        {   todos.length === 0 ? (
          <p>Not to found...</p>
        ):(
            todos.map((todo)=>(
                <li key={todo.id} >{todo.task} <button onClick={()=>handleEditTodo(todo.id)} >Edit</button> <button onClick={()=>handleDeletTodo(todo.id)} >Remove</button> </li>
            )
            )
        )
        }
      </ul>
    </>
  )
}
// 306
export default TodoList
